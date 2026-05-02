'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '@/data/personal';
import { TerminalChatbot } from '@/components/chatbot/TerminalChatbot';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      setTimeout(() => { setStatus('idle'); setErrorMsg(''); }, 5000);
      return;
    }
    if (message.trim().length < 10) {
      setStatus('error');
      setErrorMsg('Message must be at least 10 characters long.');
      setTimeout(() => { setStatus('idle'); setErrorMsg(''); }, 5000);
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name || 'Portfolio Visitor', email, subject, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMsg(data.error || 'Failed to send message. Please try again or email directly.');
        setTimeout(() => { setStatus('idle'); setErrorMsg(''); }, 5000);
      }
    } catch {
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again or email directly.');
      setTimeout(() => { setStatus('idle'); setErrorMsg(''); }, 5000);
    }
  };

  return (
    <div className="page-container relative overflow-hidden">
      <motion.p className="section-label" custom={0} variants={fadeUp} initial="hidden" animate="visible">GET IN TOUCH</motion.p>
      <motion.h1 className="section-heading" custom={1} variants={fadeUp} initial="hidden" animate="visible">CONTACT.</motion.h1>
      <motion.p className="text-base md:text-lg max-w-xl mb-16" style={{ color: 'var(--color-text-secondary)' }} custom={2} variants={fadeUp} initial="hidden" animate="visible">
        Whether it's a project inquiry, a collaboration, or just a hello, my inbox is open.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {/* Left Column */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="space-y-12">
          {/* Let's Talk Card */}
          <div className="card p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>LET'S TALK</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a href={`tel:${personalData.contact.phone}`} className="inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold tracking-wider rounded-lg transition-colors duration-200 hover:bg-white/5" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  CALL ME
                </a>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="pt-2 hidden lg:block">
            <TerminalChatbot />
          </div>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <div className="card p-6 md:p-10 h-full">
            <div className="flex items-center gap-4 mb-12">
               <div className="h-[1px] w-8" style={{ background: 'var(--color-border)' }}></div>
               <span className="text-[0.65rem] font-semibold tracking-widest uppercase" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>SEND A MESSAGE</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* Name */}
                <div className="flex flex-col relative group">
                  <label htmlFor="contact-name" className="text-[0.65rem] font-semibold tracking-wider mb-2 uppercase" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>YOUR NAME</label>
                  <input id="contact-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="FIRST NAME LAST NAME"
                    className="w-full py-2 bg-transparent outline-none transition-colors"
                    style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }} />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--color-text-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                </div>
                {/* Email */}
                <div className="flex flex-col relative group">
                  <label htmlFor="contact-email" className="text-[0.65rem] font-semibold tracking-wider mb-2 uppercase" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>EMAIL ADDRESS</label>
                  <input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="abc@gmail.com"
                    className="w-full py-2 bg-transparent outline-none transition-colors"
                    style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }} />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--color-text-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col relative group">
                <label htmlFor="contact-subject" className="text-[0.65rem] font-semibold tracking-wider mb-2 uppercase" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>SUBJECT</label>
                <input id="contact-subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required placeholder="Project Inquiry"
                  className="w-full py-2 bg-transparent outline-none transition-colors"
                  style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }} />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--color-text-primary)] transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Message */}
              <div className="flex flex-col relative group">
                <label htmlFor="contact-message" className="text-[0.65rem] font-semibold tracking-wider mb-2 uppercase" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>MESSAGE</label>
                <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} placeholder="Tell me about your project..."
                  className="w-full py-2 bg-transparent outline-none resize-none transition-colors"
                  style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }} />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--color-text-primary)] transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={status === 'loading'}
                className="w-full py-4 mt-6 text-xs font-bold tracking-widest rounded transition-all duration-200 flex items-center justify-center gap-3 uppercase hover:opacity-90"
                style={{
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--color-text-primary)',
                  color: 'var(--color-bg)',
                  opacity: status === 'loading' ? 0.7 : 1,
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
                {status === 'loading' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="lg:hidden mt-12">
        <TerminalChatbot />
      </div>

      {/* Toast Popups */}
      <AnimatePresence>
        {(status === 'error' && errorMsg) && (
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] p-5 shadow-2xl max-w-sm w-[calc(100%-3rem)]"
            style={{ backgroundColor: '#D32F2F', color: '#ffffff', borderRadius: '4px' }}>
            <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Error</h4>
            <p className="text-sm opacity-90">{errorMsg}</p>
          </motion.div>
        )}
        {status === 'success' && (
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] p-5 shadow-2xl max-w-sm w-[calc(100%-3rem)]"
            style={{ backgroundColor: '#2E7D32', color: '#ffffff', borderRadius: '4px' }}>
            <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Success</h4>
            <p className="text-sm opacity-90">Message successfully transmitted.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
