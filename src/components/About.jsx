import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code2, Brain, Database, GraduationCap, Quote } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

const WORDS = ['Developer.', 'Learner.', 'Problem Solver.', 'Builder.', 'Creator.'];

const FOCUS = [
  { icon: Code2, title: 'WEB DEV', text: 'Building responsive, fast and polished React interfaces.' },
  { icon: Brain, title: 'AI / ML', text: 'Python and scikit-learn models that solve real problems.' },
  { icon: Database, title: 'BACKEND', text: 'Node.js, Express and databases for full-stack apps.' },
  { icon: GraduationCap, title: 'DSA & CS', text: 'Strong core in data structures, OOP and DBMS.' },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function About() {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.6 });
  const titleX = useTransform(p, [0, 1], ['10%', '-10%']);
  const portraitY = useTransform(p, [0, 0.5, 1], ['8%', '0%', '-6%']);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { num: `${PROJECTS.length}+`, label: 'PROJECTS' },
    { num: `${CERTIFICATIONS.length}`, label: 'CERTIFICATES' },
    { num: '4+', label: 'YEARS LEARNING' },
    { num: '∞', label: 'CURIOSITY' },
  ];

  return (
    <section ref={sectionRef} id="about" className="section">
      <motion.div className="about-bg-title" aria-hidden="true" style={{ x: titleX }}>ABOUT ME</motion.div>

      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div {...reveal} className="lg:col-span-5">
          <motion.div className="portrait-wrap" style={{ y: portraitY }}>
            <div className="portrait-arc" />
            <div className="portrait-orb" />
            <img src={PERSONAL_INFO.cutoutImg} alt="Ankit Kumar portrait" className="portrait-img" loading="lazy" />
          </motion.div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div {...reveal} className="flex flex-wrap items-end gap-x-8 gap-y-3 mb-6">
            <h2 className="font-heading font-black text-5xl sm:text-6xl leading-[0.95] tracking-tight m-0">
              ABOUT<br /><span className="text-accent">ME.</span>
            </h2>
            <div className="pb-2">
              <span key={wordIndex} className="font-heading text-xl sm:text-2xl font-semibold text-[var(--cream)] animate-[fadeUp_0.6s_ease]">
                {WORDS[wordIndex]}
              </span>
              <span className="block mt-2 h-0.5 w-16 bg-[var(--accent)]" />
            </div>
          </motion.div>

          <motion.p {...reveal} className="text-zinc-300 leading-relaxed mb-8">
            I'm an <b className="text-white">MCA student</b> at KIET who loves turning ideas into practical applications.
            I'm fascinated by how software and modern technology can shape the future of businesses and everyday life.
            Beyond coding, I enjoy exploring design and UI experiments, blending creative thinking with technical precision.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {FOCUS.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="glass-card skill-mini">
                <Icon className="w-6 h-6 mb-3" />
                <h4 className="font-bold tracking-wider text-sm m-0 mb-1">{title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed m-0">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="quote-card mb-8">
            <Quote className="w-6 h-6 text-accent mb-2" />
            <p className="text-zinc-200 italic leading-relaxed m-0">
              Whether I'm training a model, building an interface or debugging at midnight, I love the process of thinking deeply and creating something meaningful.
            </p>
          </motion.div>

          <motion.div {...reveal} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...reveal}>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" /> Education
            </h3>
            <div className="space-y-3">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="glass-card px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm m-0">{e.degree}</p>
                    <p className="text-xs text-zinc-400 m-0 mt-1">{e.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-accent">{e.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
