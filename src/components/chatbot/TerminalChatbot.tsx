'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { terminalCommands, helpText, notFoundResponse } from '@/data/faq';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system';
  content: string;
}

const SUGGESTIONS = ['Ask about projects', 'Show resume', 'Contact details', 'Tech skills'];

function matchCommand(input: string): string | null {
  const normalized = input.toLowerCase().trim();
  if (normalized === 'help') return '__help__';
  if (normalized === 'clear') return '__clear__';

  // Exact command match
  for (const cmd of terminalCommands) {
    if (normalized === cmd.command) return cmd.command;
  }

  // Alias match
  for (const cmd of terminalCommands) {
    for (const alias of cmd.aliases) {
      if (normalized === alias || normalized.includes(alias)) {
        return cmd.command;
      }
    }
  }

  // Fuzzy: check if any keyword appears
  for (const cmd of terminalCommands) {
    const allTerms = [cmd.command, ...cmd.aliases];
    for (const term of allTerms) {
      const words = term.split(' ');
      if (words.some((w) => w.length > 2 && normalized.includes(w))) {
        return cmd.command;
      }
    }
  }

  return null;
}

function renderTerminalOutput(text: string) {
  const linkRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+|github\.com\/[a-zA-Z0-9_-]+|linkedin\.com\/in\/[a-zA-Z0-9_-]+|\/[a-zA-Z0-9_-]+\.pdf)/gi;
  const parts = text.split(linkRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.match(linkRegex)) {
      let href = part;
      let isDownload = false;
      let isExternal = true;

      if (part.includes('@')) {
        href = `mailto:${part}`;
        isExternal = false;
      } else if (part.toLowerCase().startsWith('github.com') || part.toLowerCase().startsWith('linkedin.com')) {
        href = `https://${part}`;
      } else if (part.startsWith('/')) {
        isDownload = true;
        isExternal = false;
      }

      if (isDownload) {
        return (
          <a
            key={i}
            href={href}
            download
            style={{ color: '#58a6ff', textDecoration: 'underline' }}
          >
            {part}
          </a>
        );
      }

      return (
        <a
          key={i}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          style={{ color: '#58a6ff', textDecoration: 'underline' }}
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export const TerminalChatbot: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: 'welcome-1', type: 'system', content: 'Type a command to get started. Try: help' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const addOutput = useCallback((content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setLines((prev) => [
        ...prev,
        { id: `out-${Date.now()}`, type: 'output', content },
      ]);
      setIsTyping(false);
    }, 300);
  }, []);

  const handleSubmit = useCallback(
    (value?: string) => {
      const cmd = (value || input).trim();
      if (!cmd || isTyping) return;

      // Add input line
      setLines((prev) => [
        ...prev,
        { id: `in-${Date.now()}`, type: 'input', content: cmd },
      ]);
      setInput('');

      const matched = matchCommand(cmd);

      if (matched === '__clear__') {
        setTimeout(() => {
          setLines([
            { id: `sys-${Date.now()}`, type: 'system', content: 'Terminal cleared. Type help for commands.' },
          ]);
        }, 200);
        return;
      }

      if (matched === '__help__') {
        addOutput(helpText);
        return;
      }

      if (matched) {
        const cmdData = terminalCommands.find((c) => c.command === matched);
        if (cmdData) {
          addOutput(cmdData.response);
          return;
        }
      }

      addOutput(notFoundResponse);
    },
    [input, isTyping, addOutput]
  );

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      const map: Record<string, string> = {
        'Ask about projects': 'projects',
        'Show resume': 'resume',
        'Contact details': 'contact',
        'Tech skills': 'skills',
      };
      const cmd = map[suggestion] || suggestion.toLowerCase();
      handleSubmit(cmd);
    },
    [handleSubmit]
  );

  return (
    <div>
      <div className="divider-label mb-4">
        <span>SYSTEM TERMINAL</span>
      </div>

      {/* Suggestion Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => handleSuggestionClick(s)}
            disabled={isTyping}
            className="px-3 py-1.5 text-[0.65rem] rounded-full transition-colors"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
              background: 'transparent',
              cursor: isTyping ? 'not-allowed' : 'pointer',
              opacity: isTyping ? 0.5 : 1,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="terminal-container">
        {/* Title Bar */}
        <div className="terminal-titlebar">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span
            className="ml-3 text-[0.65rem] tracking-wider"
            style={{ color: '#8b949e' }}
          >
            LAKSHAY@PORTFOLIO
          </span>
        </div>

        {/* Body */}
        <div className="terminal-body" ref={bodyRef}>
          {lines.map((line) => (
            <div key={line.id} className="mb-2">
              {line.type === 'input' && (
                <div className="terminal-prompt">
                  <span className="chevron">❯</span>
                  <span className="terminal-command">{line.content}</span>
                </div>
              )}
              {line.type === 'output' && (
                <div className="terminal-output">{renderTerminalOutput(line.content)}</div>
              )}
              {line.type === 'system' && (
                <div style={{ color: '#58a6ff', paddingLeft: '0.25rem' }}>
                  {line.content}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="terminal-output" style={{ color: '#484f58' }}>
              Processing...
            </div>
          )}

          {/* Input Prompt */}
          <div className="terminal-prompt mt-1">
            <span className="chevron">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSubmit();
              }}
              placeholder="type a command..."
              disabled={isTyping}
              autoComplete="off"
              spellCheck={false}
              id="terminal-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
