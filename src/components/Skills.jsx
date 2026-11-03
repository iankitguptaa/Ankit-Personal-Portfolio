import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss, SiBootstrap,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit, SiGithub,
  SiVercel, SiRender, SiScikitlearn, SiNumpy, SiPandas, SiClaude, SiGithubcopilot, SiGoogle,
  SiPostman,
} from 'react-icons/si';
import { Code2 } from 'lucide-react';

const GROUPS = [
  {
    id: 'languages',
    tab: 'Languages',
    title: '01 / LANGUAGES',
    items: [
      { label: 'Python', Icon: SiPython },
      { label: 'Java', Icon: FaJava },
      { label: 'JavaScript', Icon: SiJavascript },
      { label: 'C', Icon: SiC },
      { label: 'C++', Icon: SiCplusplus },
    ],
  },
  {
    id: 'frontend',
    tab: 'Front-end',
    title: '02 / FRONT-END',
    items: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: SiCss },
      { label: 'Bootstrap', Icon: SiBootstrap },
      { label: 'Tailwind CSS', Icon: SiTailwindcss },
      { label: 'React', Icon: SiReact },
      { label: 'Next.js', Icon: SiNextdotjs },
    ],
  },
  {
    id: 'backend',
    tab: 'Back-end & DB',
    title: '03 / BACK-END & DATABASES',
    items: [
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'Express', Icon: SiExpress },
      { label: 'REST APIs', Icon: SiPostman },
      { label: 'MongoDB', Icon: SiMongodb },
      { label: 'MySQL', Icon: SiMysql },
      { label: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    id: 'data',
    tab: 'Data & ML',
    title: '04 / DATA & ML',
    items: [
      { label: 'scikit-learn', Icon: SiScikitlearn },
      { label: 'NumPy', Icon: SiNumpy },
      { label: 'Pandas', Icon: SiPandas },
    ],
  },
  {
    id: 'tools',
    tab: 'Tools & AI',
    title: '05 / TOOLS, DEPLOYMENT & AI',
    items: [
      { label: 'Git', Icon: SiGit },
      { label: 'GitHub', Icon: SiGithub },
      { label: 'VS Code', Icon: VscVscode },
      { label: 'Vercel', Icon: SiVercel },
      { label: 'Render', Icon: SiRender },
      { label: 'Claude', Icon: SiClaude },
      { label: 'Antigravity', Icon: SiGoogle },
      { label: 'Codex', Icon: Code2 },
      { label: 'Copilot', Icon: SiGithubcopilot },
    ],
  },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.items.length, 0);

// rx / ry are percentages of the stage; speed is radians per millisecond.
// Every skill from the list appears on one of the four orbits.
const ORBITS = [
  {
    rx: 23, ry: 16, rot: -28, speed: 0.00016,
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Python', Icon: SiPython },
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'Git', Icon: SiGit },
      { label: 'Java', Icon: FaJava },
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'MySQL', Icon: SiMysql },
    ],
  },
  {
    rx: 32, ry: 23, rot: 34, speed: -0.00012,
    items: [
      { label: 'JavaScript', Icon: SiJavascript },
      { label: 'MongoDB', Icon: SiMongodb },
      { label: 'Express', Icon: SiExpress },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'CSS', Icon: SiCss },
      { label: 'Tailwind', Icon: SiTailwindcss },
      { label: 'Bootstrap', Icon: SiBootstrap },
    ],
  },
  {
    rx: 26, ry: 35, rot: 76, speed: 0.00018,
    items: [
      { label: 'C', Icon: SiC },
      { label: 'C++', Icon: SiCplusplus },
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'REST APIs', Icon: SiPostman },
      { label: 'GitHub', Icon: SiGithub },
      { label: 'VS Code', Icon: VscVscode },
      { label: 'Vercel', Icon: SiVercel },
    ],
  },
  {
    rx: 40, ry: 29, rot: -64, speed: -0.00009,
    items: [
      { label: 'Render', Icon: SiRender },
      { label: 'scikit-learn', Icon: SiScikitlearn },
      { label: 'NumPy', Icon: SiNumpy },
      { label: 'Pandas', Icon: SiPandas },
      { label: 'Claude', Icon: SiClaude },
      { label: 'Antigravity', Icon: SiGoogle },
      { label: 'Codex', Icon: Code2 },
      { label: 'Copilot', Icon: SiGithubcopilot },
    ],
  },
];

const NODES = ORBITS.flatMap((orbit) => orbit.items);

function OrbitStage() {
  const nodeRefs = useRef([]);
  const pausedRef = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let last = performance.now();
    let clock = 0;

    const place = (t) => {
      let n = 0;
      ORBITS.forEach((orbit) => {
        const rad = (orbit.rot * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        orbit.items.forEach((_, i) => {
          const angle = (i / orbit.items.length) * Math.PI * 2 + t * orbit.speed;
          const x = orbit.rx * Math.cos(angle);
          const y = orbit.ry * Math.sin(angle);
          const px = x * cos - y * sin;
          const py = x * sin + y * cos;
          const el = nodeRefs.current[n];
          if (el) {
            // Nodes lower on the stage read as "closer": scale up and layer on top.
            const depth = (py + 38) / 76;
            el.style.left = `${50 + px}%`;
            el.style.top = `${50 + py}%`;
            el.style.zIndex = String(Math.round(depth * 100));
            el.style.transform = `translate(-50%, -50%) scale(${(0.82 + 0.3 * depth).toFixed(3)})`;
          }
          n += 1;
        });
      });
    };

    if (reduce) {
      place(0);
      return undefined;
    }

    const loop = (now) => {
      const dt = now - last;
      last = now;
      // Hovering a logo freezes the orbit so it is easy to read.
      if (!pausedRef.current) clock += dt;
      place(clock);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="stack-stage" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {ORBITS.map((o, i) => (
          <ellipse
            key={i}
            cx="50" cy="50" rx={o.rx} ry={o.ry}
            transform={`rotate(${o.rot} 50 50)`}
            fill="none"
            stroke={i % 2 === 1 ? 'rgba(255,255,255,0.28)' : 'var(--accent)'}
            strokeOpacity={i % 2 === 1 ? 1 : 0.55}
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="stack-core">
        <span>&lt;/&gt;</span>
      </div>

      {NODES.map(({ label, Icon }, idx) => (
        <div
          key={label}
          ref={(el) => { nodeRefs.current[idx] = el; }}
          className="stack-node"
          style={{ left: '50%', top: '50%' }}
          onPointerEnter={() => { pausedRef.current = true; }}
          onPointerLeave={() => { pausedRef.current = false; }}
        >
          <span className="stack-node-icon"><Icon className="w-4 h-4" /></span>
          <span className="stack-node-label">{label}</span>
        </div>
      ))}

      <p className="stack-caption">STACK / LEARN / BUILD / SHIP</p>
    </div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState('all');
  const visible = tab === 'all' ? GROUPS : GROUPS.filter((g) => g.id === tab);

  return (
    <section id="skills" className="section">
      <div className="parallax-word" aria-hidden="true">SKILLS</div>

      <div className="container-x">
        <span className="tagline">// EXPERTISE</span>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Skills</h2>
        <p className="text-zinc-400 mt-3 mb-0 max-w-xl text-sm">
          {TOTAL} tools I use to design, build and ship. Hover a logo to pause the orbit, or filter the list by area.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="stack-panel stack-panel-left"
          >
            <OrbitStage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="stack-panel stack-panel-right"
          >
            <div className="stack-tabs" role="tablist" aria-label="Filter skills">
              {[{ id: 'all', tab: 'All', count: TOTAL }, ...GROUPS.map((g) => ({ id: g.id, tab: g.tab, count: g.items.length }))].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`stack-tab ${tab === t.id ? 'active' : ''}`}
                >
                  {t.tab} <span>{t.count}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {visible.map((g) => (
                  <div key={g.id} className="mb-3.5 last:mb-0">
                    <h3 className="stack-group-title">{g.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map(({ label, Icon }) => (
                        <div key={label} className="stack-chip">
                          <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
