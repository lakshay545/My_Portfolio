'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projectsData, projectCategories } from '@/data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
        ARCHIVE DIRECTORY
      </motion.p>

      {/* Giant Heading */}
      <motion.h1
        className="section-heading"
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        COMPLETE
        <br />
        ARCHIVE.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base md:text-lg max-w-2xl mb-12"
        style={{ color: 'var(--color-text-secondary)' }}
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        A comprehensive catalog of{' '}
        <em style={{ color: 'var(--color-text-primary)' }}>intelligent</em>{' '}
        solutions, tools, and technical explorations.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        className="mb-6"
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg"
          style={{
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg-card)',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="SEARCH BY TITLE, TECHNOLOGY OR DESCRIPTION..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-xs tracking-wider"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
            }}
            id="project-search"
          />
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 text-xs font-semibold tracking-wider rounded-lg transition-all duration-200"
            style={{
              fontFamily: 'var(--font-mono)',
              border: '1px solid',
              borderColor:
                activeCategory === cat
                  ? 'var(--color-text-primary)'
                  : 'var(--color-border)',
              color:
                activeCategory === cat
                  ? 'var(--color-bg)'
                  : 'var(--color-text-secondary)',
              backgroundColor:
                activeCategory === cat
                  ? 'var(--color-text-primary)'
                  : 'transparent',
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* Featured Works Label */}
      <div className="divider-label mb-8">
        <span>FEATURED WORKS</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className="card group"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {/* Category */}
            <p
              className="text-[0.65rem] font-semibold tracking-widest uppercase mb-2"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {project.category}
            </p>

            {/* Title */}
            <h3
              className="text-base font-bold mb-3"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  CODE
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn demo"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  DEMO
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p
            className="text-sm"
            style={{
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            No projects found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
