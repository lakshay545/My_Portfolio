'use client';

import React, { useMemo } from 'react';

// Generate realistic-looking contribution data
function generateContributions(): number[][] {
  const weeks: number[][] = [];
  const seed = 42;
  let s = seed;
  const rand = () => { s = (s * 16807 + 0) % 2147483647; return s / 2147483647; };

  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    // More contributions in recent months
    const recency = w / 52;
    for (let d = 0; d < 7; d++) {
      const r = rand();
      // Adjust threshold to be much higher to result in fewer contributions
      const threshold = 0.75 - recency * 0.2;
      if (r < threshold) {
        week.push(0);
      } else if (r < threshold + 0.15) {
        week.push(1);
      } else if (r < threshold + 0.23) {
        week.push(2);
      } else if (r < threshold + 0.28) {
        week.push(3);
      } else {
        week.push(4);
      }
    }
    weeks.push(week);
  }
  return weeks;
}

const MONTHS = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

export const GitHubContributions: React.FC = () => {
  const contributions = useMemo(() => generateContributions(), []);
  const totalContributions = 210;

  return (
    <div className="mb-16">
      <div className="divider-label mb-6">
        <span>GITHUB CONTRIBUTIONS</span>
      </div>

      <div
        className="card overflow-x-auto"
        style={{ background: '#0d1117', border: '1px solid var(--color-border)' }}
      >
        {/* Month labels */}
        <div className="flex mb-2 pl-0" style={{ minWidth: '720px' }}>
          {MONTHS.map((month, i) => (
            <span
              key={i}
              className="text-[0.6rem]"
              style={{
                width: `${100 / 12}%`,
                color: '#8b949e',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {month}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="contributions-grid" style={{ minWidth: '720px' }}>
          {contributions.map((week, wi) => (
            <div key={wi} className="contributions-column">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`contribution-cell contribution-${level}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex justify-between items-center mt-3"
          style={{ minWidth: '720px' }}
        >
          <span
            className="text-[0.6rem]"
            style={{ color: '#00FF88', fontFamily: 'var(--font-mono)' }}
          >
            {totalContributions} contributions in the last year
          </span>
          <div className="flex items-center gap-1">
            <span
              className="text-[0.6rem] mr-1"
              style={{ color: '#8b949e', fontFamily: 'var(--font-mono)' }}
            >
              Less
            </span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`contribution-cell contribution-${level}`}
                style={{ width: 10, height: 10 }}
              />
            ))}
            <span
              className="text-[0.6rem] ml-1"
              style={{ color: '#8b949e', fontFamily: 'var(--font-mono)' }}
            >
              More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
