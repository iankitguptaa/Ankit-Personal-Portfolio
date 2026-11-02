import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
    title: '02 / FRONT-END & RUNTIME',
    items: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: SiCss },
      { label: 'Bootstrap', Icon: SiBootstrap },
      { label: 'Tailwind CSS', Icon: SiTailwindcss },
      { label: 'React', Icon: SiReact },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'Express', Icon: SiExpress },
      { label: 'REST APIs', Icon: SiPostman },
    ],
  },
  {
    title: '03 / DATA, ML & TOOLS',
    items: [
      { label: 'MongoDB', Icon: SiMongodb },
      { label: 'MySQL', Icon: SiMysql },
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'scikit-learn', Icon: SiScikitlearn },
      { label: 'NumPy', Icon: SiNumpy },
      { label: 'Pandas', Icon: SiPandas },
      { label: 'Git', Icon: SiGit },
      { label: 'GitHub', Icon: SiGithub },
      { label: 'VS Code', Icon: VscVscode },
    ],
  },
  {
    title: '04 / AI TOOLS & DEPLOYMENT',
    items: [
      { label: 'Claude', Icon: SiClaude },
      { label: 'Antigravity', Icon: SiGoogle },
      { label: 'Codex', Icon: Code2 },
      { label: 'Copilot', Icon: SiGithubcopilot },
      { label: 'Vercel', Icon: SiVercel },
      { label: 'Render', Icon: SiRender },
    ],
  },
];

// rx / ry are percentages of the stage; speed is radians per millisecond.
const ORBITS = [
  {
    rx: 32, ry: 22, rot: -28, speed: 0.00013,
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Python', Icon: SiPython },
      { label: 'Node.js', Icon: SiNodedotjs },
    ],
  },
  {
    rx: 36, ry: 26, rot: 34, speed: -0.0001,
    items: [
      { label: 'JavaScript', Icon: SiJavascript },
      { label: 'MongoDB', Icon: SiMongodb },
      { label: 'Express', Icon: SiExpress },
      { label: 'Next.js', Icon: SiNextdotjs },
    ],
  },
  {
    rx: 25, ry: 31, rot: 76, speed: 0.00016,
    items: [
      { label: 'Git', Icon: SiGit },
      { label: 'MySQL', Icon: SiMysql },
      { label: 'Tailwind', Icon: SiTailwindcss },
    ],
  },
];

const NODES = ORBITS.flatMap((orbit) => orbit.items);

function OrbitStage() {
  const nodeRefs = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;

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
          const el = nodeRefs.current[n];
          if (el) {
            el.style.left = `${50 + x * cos - y * sin}%`;
            el.style.top = `${50 + x * sin + y * cos}%`;
          }
          n += 1;
        });
      });
    };

    if (reduce) {
      place(0);
      return undefined;
    }

    const loop = (t) => {
      place(t);
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
            stroke={i === 1 ? 'rgba(255,255,255,0.28)' : 'var(--accent)'}
            strokeOpacity={i === 1 ? 1 : 0.6}
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
        >
          <span className="stack-node-icon"><Icon className="w-5 h-5" /></span>
          <span className="stack-node-label">{label}</span>
        </div>
      ))}

      <p className="stack-caption">STACK / LEARN / BUILD / SHIP</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <span className="tagline">// EXPERTISE</span>
        <h2 className="section-title mb-0">Skills</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
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
            {GROUPS.map((g) => (
              <div key={g.title} className="mb-6 last:mb-0">
                <h3 className="stack-group-title">{g.title}</h3>
                <div className="grid grid-cols-2 min-[1300px]:grid-cols-3 gap-2.5">
                  {g.items.map(({ label, Icon }) => (
                    <div key={label} className="stack-chip">
                      <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
