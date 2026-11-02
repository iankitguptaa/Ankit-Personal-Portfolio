import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="parallax-word" aria-hidden="true">CAREER</div>

      <div className="container-x">
        <div>
          <span className="tagline">// JOURNEY</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="relative pl-8 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute left-[11px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-white/15 to-transparent"
          />

          <div className="space-y-8">
            {EXPERIENCE.map((job, i) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-12 top-7 w-6 h-6 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] flex items-center justify-center shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_55%,transparent)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </span>

                <div className="glass-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight m-0 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-accent shrink-0" /> {job.role}
                      </h3>
                      <p className="text-zinc-300 font-semibold m-0 mt-1">{job.company}</p>
                    </div>
                    <div className="text-xs text-zinc-400 space-y-1.5 sm:text-right">
                      <p className="m-0 flex items-center gap-1.5 sm:justify-end font-mono text-accent">
                        <CalendarDays className="w-3.5 h-3.5" /> {job.period}
                      </p>
                      <p className="m-0 flex items-center gap-1.5 sm:justify-end">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 m-0 p-0 list-none mb-6">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
