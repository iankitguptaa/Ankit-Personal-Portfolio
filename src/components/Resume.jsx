import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

// ?v= busts browser/CDN caches when the PDF is replaced; bump it with each new resume.
const RESUME_URL = '/ANKIT_KUMAR_RESUME.pdf?v=2';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="parallax-word" aria-hidden="true">RESUME</div>

      <div className="container-x">
        <div>
          <span className="tagline">// CURRICULUM VITAE</span>
          <h2 className="section-title">Resume</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
            <iframe
              src={`${RESUME_URL}#toolbar=0&navpanes=0&view=FitH`}
              title="Ankit Kumar resume preview"
              className="w-full h-[420px] md:h-[480px] bg-white"
              loading="lazy"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={RESUME_URL} download="ANKIT_KUMAR_RESUME.pdf" className="pill-btn solid">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="pill-btn">
              <ExternalLink className="w-4 h-4" /> Open in New Tab
            </a>
          </div>
          <p className="text-center text-xs text-zinc-500 mt-4 m-0">
            Preview not showing on your device? Use "Open in New Tab" or download the PDF.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
