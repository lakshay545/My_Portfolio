import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Rate limiting
const rateLimiter = new Map<string, { count: number; reset: number }>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const record = rateLimiter.get(ip);
  if (!record || now > record.reset) {
    rateLimiter.set(ip, { count: 1, reset: now + 60000 });
    return true;
  }
  if (record.count < 5) {
    record.count++;
    return true;
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRate(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 });
    }

    const body: ContactFormData = await req.json();

    // Validate
    if (!body.email || !body.message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Check for disposable email domains
    const disposableDomains = ['mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email', 'fakeinbox.com', 'sharklasers.com', 'yopmail.com'];
    const domain = body.email.split('@')[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      return NextResponse.json({ error: 'Please use a valid email address, not a disposable one.' }, { status: 400 });
    }

    if (body.message.length < 10 || body.message.length > 5000) {
      return NextResponse.json({ error: 'Message must be between 10 and 5000 characters.' }, { status: 400 });
    }

    // Try to send email via Nodemailer if configured
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailUser && gmailPass) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.default.createTransport({
          service: 'gmail',
          auth: { user: gmailUser, pass: gmailPass },
        });

        await transporter.sendMail({
          from: `"Portfolio System" <${gmailUser}>`,
          to: 'lakshaysh1@gmail.com',
          replyTo: body.email,
          subject: body.subject ? `Portfolio: ${body.subject}` : `New Message from ${body.name || 'Visitor'}`,
          html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #ffffff;">
              <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #111111; margin-bottom: 30px;">
                <h1 style="color: #111111; margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase;">New Portfolio Transmission</h1>
              </div>
              
              <div style="margin-bottom: 25px;">
                <h3 style="color: #888888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">Sender Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #555555; width: 80px;"><strong>Name:</strong></td>
                    <td style="padding: 6px 0; color: #111111;">${body.name || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #555555;"><strong>Email:</strong></td>
                    <td style="padding: 6px 0;"><a href="mailto:${body.email}" style="color: #0066cc; text-decoration: none;">${body.email}</a></td>
                  </tr>
                  ${body.subject ? `
                  <tr>
                    <td style="padding: 6px 0; color: #555555;"><strong>Subject:</strong></td>
                    <td style="padding: 6px 0; color: #111111; font-weight: bold;">${body.subject}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              
              <div style="background-color: #fafafa; padding: 25px; border-radius: 8px; border-left: 4px solid #111111;">
                <h3 style="color: #888888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-top: 0; margin-bottom: 15px;">Message Content</h3>
                <p style="color: #333333; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px;">${body.message}</p>
              </div>
              
              <div style="margin-top: 40px; text-align: center; color: #aaaaaa; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0;">This is an automated message sent from your portfolio website.</p>
                <p style="margin: 5px 0 0 0;">Do not reply directly to this email. Use the sender's email address provided above.</p>
              </div>
            </div>
          `,
        });

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
      } catch (emailError) {
        console.error('Email send failed:', emailError);
        return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
      }
    }

    // Fallback: log to console if email not configured
    console.log('📧 Contact form:', { timestamp: new Date().toISOString(), ...body });
    return NextResponse.json({ message: 'Message received! (Email delivery pending configuration)' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
