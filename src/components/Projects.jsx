import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';

const N = PROJECTS.length;
const MAX_TAGS = 4;

// Layout per breakpoint: horizontal step between cards, how far side cards sink,
// how much they turn towards the centre, and how many neighbours stay visible.
const LAYOUTS = {
  lg: { step: 330, depth: 120, rot: 26, reach: 2 },
  md: { step: 250, depth: 100, rot: 24, reach: 1 },
  sm: { step: 170, depth: 110, rot: 28, reach: 1 },
};

// Phones show a smaller card (60vw, max 250px) so the neighbours on both sides stay clearly visible.
function phoneLayout() {
  const cardWidth = Math.min(window.innerWidth * 0.6, 250);
  return { ...LAYOUTS.sm, step: Math.round(cardWidth * 0.66) };
}

function pickLayout() {
  if (window.matchMedia('(min-width: 1024px)').matches) return LAYOUTS.lg;
  if (window.matchMedia('(min-width: 640px)').matches) return LAYOUTS.md;
  return phoneLayout();
}

function useLayout() {
  const [layout, setLayout] = useState(pickLayout);
  useEffect(() => {
    const onResize = () => setLayout(pickLayout());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return layout;
}

// Shortest signed distance on a ring, so the carousel loops.
function ringOffset(index, active) {
  const half = Math.floor(N / 2);
  return ((index - active + N + half) % N) - half;
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const layout = useLayout();
  const dragStart = useRef(null);

  const go = (delta) => setActive((a) => (a + delta + N) % N);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  // Side cards sit behind the stage's own z=0 plane, so some browsers deliver their clicks to the
  // stage instead of the card. Work out which card was clicked from where each one is drawn.
  const onStageClick = (e) => {
    if (e.target.closest('.proj-card')) return;
    const cards = e.currentTarget.querySelectorAll('.proj-card');
    let best = -1;
    let bestAbs = Infinity;
    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      const abs = Math.abs(ringOffset(i, active));
      if (inside && abs <= layout.reach && abs < bestAbs) {
        best = i;
        bestAbs = abs;
      }
    });
    if (best >= 0 && best !== active) setActive(best);
  };

  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <section id="projects" className="section">
      <div className="parallax-word" aria-hidden="true">WORK</div>

      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="tagline">// CREATIVE WORKS</span>
          <h2 className="section-title mb-3" style={{ marginBottom: 12 }}>Featured Projects</h2>
          <p className="text-zinc-400 m-0 text-sm sm:text-base">
            Visual evidence of the applications and platforms I have designed and built.
          </p>
        </div>
      </div>

      <div
        className="proj-stage"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        onKeyDown={onKeyDown}
        onClick={onStageClick}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { dragStart.current = null; }}
      >
        {PROJECTS.map((p, i) => {
          const o = ringOffset(i, active);
          const abs = Math.abs(o);
          const visible = abs <= layout.reach;
          const isActive = o === 0;
          const tags = p.tags.slice(0, MAX_TAGS);
          const extra = p.tags.length - tags.length;

          return (
            <motion.article
              key={p.id}
              className="proj-card"
              aria-hidden={!isActive}
              animate={{
                x: o * layout.step,
                z: -abs * layout.depth,
                rotateY: -o * layout.rot,
                scale: 1 - abs * 0.1,
                opacity: visible ? 1 - abs * 0.22 : 0,
              }}
              transition={{ type: 'spring', stiffness: 130, damping: 20, mass: 0.9 }}
              style={{ zIndex: 10 - abs, pointerEvents: visible ? 'auto' : 'none' }}
              onClick={() => { if (!isActive && visible) setActive(i); }}
            >
              <span className={`proj-dim ${isActive ? '' : 'on'}`} aria-hidden="true" />
              <div className="proj-media">
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" draggable="false" />
              </div>

              <div className="proj-body">
                <p className="proj-case">CASE / {String(i + 1).padStart(2, '0')} · {p.category.toUpperCase()}</p>
                <h3 className="proj-title">{p.title}</h3>

                <p className="proj-label">ABOUT THE PROJECT:</p>
                <p className="proj-desc">{p.description}</p>

                <p className="proj-label">TECHNOLOGY STACK:</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="proj-chip">{t}</span>
                  ))}
                  {extra > 0 && <span className="proj-chip proj-chip-more">+{extra}</span>}
                </div>

                <div className="proj-actions" style={{ pointerEvents: isActive ? 'auto' : 'none' }}>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    className="proj-cta"
                  >
                    <span className="sm:hidden">View Live</span><span className="hidden sm:inline">View Live Project</span> <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    className="proj-code"
                    aria-label={`${p.title} source code`}
                    title="Source code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="container-x">
        <div className="flex items-center justify-center gap-5 mt-4">
          <button type="button" className="proj-nav" onClick={() => go(-1)} aria-label="Previous project">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose project">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={p.title}
                onClick={() => setActive(i)}
                className={`proj-dot ${i === active ? 'active' : ''}`}
              />
            ))}
          </div>
          <button type="button" className="proj-nav" onClick={() => go(1)} aria-label="Next project">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
