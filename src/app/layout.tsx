import type { Metadata } from 'next';
import { Poppins, Inter, Fira_Code } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lakshay Sharma — Personal Website',
  description:
    'Portfolio of Lakshay Sharma — Computer Science undergraduate building intelligent systems and full-stack web applications.',
  keywords: [
    'Lakshay Sharma',
    'Personal Website',
    'Portfolio',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Lakshay Sharma' }],
  openGraph: {
    type: 'website',
    title: 'Lakshay Sharma — Personal Website',
    description: 'Personal Website of Lakshay Sharma',
    siteName: 'Lakshay Sharma Portfolio',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${firaCode.variable}`}
    >
      <head>
        <link rel="icon" href="/avatar-pixel.png" type="image/png" />
        {/* Prevent FOUC: set theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('portfolio-theme') || 'dark';
                document.documentElement.setAttribute('data-theme', t);
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
