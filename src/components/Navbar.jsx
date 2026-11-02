import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, scrollTo }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[72px] flex items-center bg-gradient-to-b from-black/70 to-transparent backdrop-blur-[2px]">
      <div className="w-full max-w-[1300px] mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => go('hero')}
          className="font-heading font-extrabold text-xl tracking-wide text-white cursor-pointer"
          aria-label="Go to top"
        >
          ANKIT<span className="text-accent">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go('resume')}
            className="hidden xl:inline-flex whitespace-nowrap items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-black/40 text-xs font-bold tracking-wider uppercase text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" /> View Resume
          </button>
          <button
            className="lg:hidden p-2 text-white cursor-pointer"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[72px] inset-x-4 rounded-3xl border border-white/10 bg-black/85 backdrop-blur-2xl p-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link text-left ${activeSection === l.id ? 'active' : ''}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
