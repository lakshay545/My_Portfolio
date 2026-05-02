'use client';

import React from 'react';
import { personalData } from '@/data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p
          className="text-xs"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          &copy; {currentYear} Lakshay Sharma. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:underline"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            GitHub
          </a>
          <a
            href={personalData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:underline"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalData.contact.email}`}
            className="text-xs transition-colors hover:underline"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
