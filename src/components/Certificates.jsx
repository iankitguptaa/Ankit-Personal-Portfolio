import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="section">
      <div className="parallax-word" aria-hidden="true">PROOF</div>

      <div className="container-x">
        <div>
          <span className="tagline">// CREDENTIALS</span>
          <h2 className="section-title">Certificates</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.button
              key={cert.title}
              type="button"
              onClick={() => setSelected(cert)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card overflow-hidden text-left cursor-pointer group p-0"
            >
              <div className="relative h-52 overflow-hidden bg-black/40">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-mono tracking-widest text-accent m-0 mb-2 uppercase">{cert.issuer}</p>
                <h3 className="text-base font-bold leading-snug m-0">{cert.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              onClick={() => setSelected(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={selected.image}
              alt={`${selected.title} certificate`}
              className="max-h-[88vh] max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
