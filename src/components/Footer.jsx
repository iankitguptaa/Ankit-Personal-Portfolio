import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ scrollTo }) {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <p className="font-heading font-extrabold text-xl tracking-wide m-0">
            ANKIT KUMAR<span className="text-accent">.</span>
          </p>
          <p className="text-xs text-zinc-500 m-0 mt-1">MCA Student · Web Developer · Tech Explorer</p>
        </div>
        <p className="text-xs text-zinc-500 m-0">© {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
        <button
          onClick={() => scrollTo('hero')}
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
