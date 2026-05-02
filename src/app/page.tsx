'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '@/data/personal';
import { TerminalChatbot } from '@/components/chatbot/TerminalChatbot';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* Section Label */}
      <motion.p
        className="section-label"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        THE BACKGROUND
      </motion.p>

      {/* Giant Heading */}
      <motion.h1
        className="section-heading"
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        ABOUT
        <br />
        ME.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base md:text-lg max-w-2xl mb-16"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        My journey from starting out to building intelligent systems focused on
        healthcare and specialized domains.
      </motion.p>

      {/* Two Column: WHO AM I? + EDUCATION JOURNEY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: WHO AM I? */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="divider-label">
            <span>WHO AM I?</span>
          </div>

          <div className="flex items-start gap-4 mb-6">

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {personalData.bio}
            </p>
          </div>

          <p
            className="text-sm leading-relaxed italic mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {personalData.extendedBio}
          </p>

          {/* Resume Download */}
          <a
            href={personalData.resume}
            download="Lakshay_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider rounded-lg transition-all duration-200"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD RESUME
          </a>
        </motion.div>

        {/* Right: EDUCATION JOURNEY */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="divider-label">
            <span>EDUCATION JOURNEY</span>
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {personalData.educationJourney}
          </p>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        custom={5}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { value: '3+', label: 'Projects Built' },
          { value: '10+', label: 'Hackathons' },
          { value: '250+', label: 'DSA Problems' },
          { value: '8.8', label: 'CGPA / 10' },
        ].map((stat, i) => (
          <div
            key={i}
            className="card text-center py-6"
          >
            <p
              className="text-2xl md:text-3xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              {stat.value}
            </p>
            <p
              className="text-xs"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Education Card */}
      <motion.div
        className="card mb-16"
        custom={6}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-4">
          <div className="text-2xl">🎓</div>
          <div>
            <h3
              className="text-sm font-bold mb-1"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {personalData.education.degree}
            </h3>
            <p
              className="text-xs mb-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {personalData.education.university}
            </p>
            <p
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {personalData.education.duration} • CGPA:{' '}
              {personalData.education.cgpa} •{' '}
              {personalData.education.honors}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Terminal Chatbot */}
      <TerminalChatbot />
    </div>
  );
}
