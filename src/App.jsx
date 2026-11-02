import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'resume', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <div className="ambient-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="dot-grid" />
      </div>

      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <ThemeSwitcher />

      <main className="relative z-10">
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      <Footer scrollTo={scrollTo} />
    </div>
  );
}
