import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FileText, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const DESKTOP_QUERY = '(min-width: 769px)';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isDesktop;
}

export default function Hero({ scrollTo }) {
  const heroRef = useRef(null);
  const isDesktop = useIsDesktop();

  // Scroll-linked parallax layers (desktop only), smoothed for a "scrub" lag.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.6 });

  const headingY = useTransform(p, [0, 1], ['0%', '-20%']);
  const headingX = useTransform(p, [0, 1], ['0%', '-15%']);
  const headingOpacity = useTransform(p, [0, 1], [1, 0.08]);

  const portraitY = useTransform(p, [0, 1], ['0%', '12%']);
  const portraitScale = useTransform(p, [0, 1], [1, 0.92]);
  const portraitOpacity = useTransform(p, [0, 1], [1, 0.05]);

  const textY = useTransform(p, [0, 0.45], ['0%', '-35%']);
  const textOpacity = useTransform(p, [0, 0.45], [1, 0]);

  const hintY = useTransform(p, [0, 0.2], ['0%', '-15%']);
  const hintOpacity = useTransform(p, [0, 0.2], [1, 0]);

  // Mouse parallax on the background heading (opposite direction to the cursor).
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!isDesktop) return undefined;
    const onMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * -40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * -20);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [isDesktop, mouseX, mouseY]);

  const scrollStyle = (style) => (isDesktop ? style : undefined);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen overflow-hidden flex items-start md:items-center">
      {/* Layer 1: background typography */}
      <div className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
        <motion.div style={scrollStyle({ y: headingY, x: headingX, opacity: headingOpacity })}>
          <motion.span
            aria-hidden="true"
            initial={{ x: 180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.165, 0.84, 0.44, 1] }}
            style={scrollStyle({ translateX: smoothX, translateY: smoothY })}
            className="block select-none font-heading font-black tracking-tighter leading-none text-white/[0.05] whitespace-nowrap text-[17vw]"
          >
            PORTFOLIO
          </motion.span>
        </motion.div>
      </div>

      {/* Layer 2: portrait */}
      <div className="absolute inset-x-0 bottom-0 top-16 flex justify-center items-end pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex items-end justify-center"
        >
          <motion.div
            style={scrollStyle({ y: portraitY, scale: portraitScale, opacity: portraitOpacity })}
            className="relative h-full flex items-end justify-center"
          >
            <div
              className="absolute w-[44vh] h-[44vh] md:w-[70vh] md:h-[70vh] rounded-full blur-[100px] md:blur-[120px] bottom-[6%] md:bottom-[10%] opacity-30"
              style={{ background: 'var(--accent)' }}
            />
            <img
              src={PERSONAL_INFO.heroImg}
              alt="Ankit Kumar"
              className="relative h-[46vh] md:h-[88vh] max-w-none w-auto object-contain object-bottom hero-portrait [mask-image:linear-gradient(#000_82%,transparent)] [-webkit-mask-image:linear-gradient(#000_82%,transparent)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Layer 3: foreground text */}
      <div className="container-x w-full">
        <motion.div className="pt-28 pb-24 md:pt-24" style={scrollStyle({ y: textY, opacity: textOpacity })}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <h1 className="font-extrabold tracking-tight leading-[1.02] text-white m-0">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                Hi <span className="font-light">I'm</span>
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-accent">Ankit</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl">Kumar</span>
            </h1>

            <p className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-md">
              {PERSONAL_INFO.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={() => scrollTo('resume')} className="pill-btn">
                <FileText className="w-4 h-4" /> View Resume
              </button>
              <button onClick={() => scrollTo('projects')} className="pill-btn">
                <Briefcase className="w-4 h-4" /> View Projects
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={scrollStyle({ y: textY, opacity: textOpacity })}
        className="hidden md:block absolute right-8 lg:right-16 bottom-28 z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-right"
        >
          <p className="font-heading text-xl lg:text-2xl font-extrabold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
            MCA Student
          </p>
          <p className="font-heading text-4xl lg:text-6xl font-black uppercase leading-[0.95] text-[var(--cream)] m-0">
            Full-Stack<br />Developer
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        style={scrollStyle({ y: hintY, opacity: hintOpacity })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-zinc-400 hover:text-white cursor-pointer"
        >
          <span className="w-5 h-8 rounded-full border border-zinc-500 flex justify-center pt-1.5">
            <span className="w-0.5 h-1.5 rounded bg-zinc-300 animate-bounce" />
          </span>
          SCROLL DOWN
        </button>
      </motion.div>
    </section>
  );
}
