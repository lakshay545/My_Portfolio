'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { certificatesData } from '@/data/certificates';
import { GitHubContributions } from '@/components/ui/GitHubContributions';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function SkillsPage() {
  return (
    <div className="page-container">
      <motion.p className="section-label" custom={0} variants={fadeUp} initial="hidden" animate="visible">CAPABILITIES</motion.p>
      <motion.h1 className="section-heading" custom={1} variants={fadeUp} initial="hidden" animate="visible">TECH<br />ARSENAL.</motion.h1>
      <motion.p className="text-base md:text-lg max-w-2xl mb-16" style={{ color: 'var(--color-text-secondary)' }} custom={2} variants={fadeUp} initial="hidden" animate="visible">
        A comprehensive overview of the tools, languages, and frameworks I use to build intelligent systems.
      </motion.p>

      <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <GitHubContributions />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillsData.map((category, i) => (
          <motion.div key={category.id} className="card" custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>{category.icon}</div>
              <h3 className="text-xs font-bold tracking-wider" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill.name} className="tech-pill">
                  {skill.icon && <span className="text-[0.65rem]">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="divider-label mb-8"><span>CERTIFICATES</span></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificatesData.map((cert, i) => (
          <motion.div key={cert.id} className="card" custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl font-bold" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-heading)' }}>{cert.number}</span>
              <div>
                <h4 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{cert.title}</h4>
                <p className="text-[0.65rem] tracking-wider" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{cert.type}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a href={cert.viewUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[0.65rem] font-semibold tracking-wider rounded-lg hover:bg-white/5" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>VIEW ORIGINAL</a>
              <a href={cert.downloadUrl || '#'} download className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[0.65rem] font-semibold tracking-wider rounded-lg hover:bg-white/5" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>DOWNLOAD PDF</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
