import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="section">
      <div className="parallax-word" aria-hidden="true">WORK</div>

      <div className="container-x">
        <div>
          <span className="tagline">// CREATIVE WORKS</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="accordion"
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`acc-item ${active === i ? 'active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              aria-expanded={active === i}
              onFocus={() => setActive(i)}
            >
              <div className="acc-bg" style={{ backgroundImage: `url('${p.image}')` }} />
              <span className="acc-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="acc-vert">{p.title}</span>

              <div className="acc-details">
                <h3 className="text-3xl font-extrabold tracking-tight m-0 mb-3">{p.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-xl m-0 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                    <span>Live Demo</span> <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                    <GithubIcon className="w-4 h-4" /> <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
