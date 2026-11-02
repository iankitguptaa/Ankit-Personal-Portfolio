import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, LeetcodeIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', subject: '', message: '' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`;

  // No backend: the form opens WhatsApp with the message pre-filled for the owner's number.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'New message from my portfolio',
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      form.subject ? `Subject: ${form.subject}` : null,
      '',
      form.message,
    ].filter((l) => l !== null);
    window.open(`${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  };

  const socials = [
    { href: PERSONAL_INFO.github, label: 'GitHub', icon: <GithubIcon className="w-5 h-5" /> },
    { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', icon: <LinkedinIcon className="w-5 h-5" /> },
    { href: PERSONAL_INFO.leetcode, label: 'LeetCode', icon: <LeetcodeIcon className="w-5 h-5" /> },
    { href: gmailCompose, label: 'Email', icon: <Mail className="w-5 h-5" /> },
    { href: PERSONAL_INFO.whatsapp, label: 'WhatsApp', icon: <WhatsappIcon className="w-5 h-5" /> },
  ];

  return (
    <section id="contact" className="section">
      <div className="parallax-word" aria-hidden="true">HELLO</div>

      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="tagline">// GET IN TOUCH</span>
          <h2 className="section-title mb-4">Let's Connect &amp; Collaborate</h2>
          <p className="text-zinc-400 m-0">
            Whether it's a new project, a collaboration, or just to say hi, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div {...reveal} className="lg:col-span-5 space-y-4">
            <a href={gmailCompose} target="_blank" rel="noreferrer" className="glass-card p-5 flex items-center gap-4">
              <Mail className="w-6 h-6 text-accent shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] tracking-widest text-zinc-500 m-0">EMAIL</p>
                <p className="font-semibold m-0 truncate">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noreferrer" className="glass-card p-5 flex items-center gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="text-[11px] tracking-widest text-zinc-500 m-0">PHONE / WHATSAPP</p>
                <p className="font-semibold m-0">{PERSONAL_INFO.phone}</p>
              </div>
            </a>
            <div className="glass-card p-5 flex items-center gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="text-[11px] tracking-widest text-zinc-500 m-0">LOCATION</p>
                <p className="font-semibold m-0">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 hover:text-white hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form {...reveal} onSubmit={handleSubmit} className="lg:col-span-7 glass-card p-7 space-y-4 hover:!transform-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="field" placeholder="Your Name" required value={form.name} onChange={update('name')} aria-label="Your name" />
              <input className="field" placeholder="Your Email or Phone" required value={form.contact} onChange={update('contact')} aria-label="Your email or phone" />
            </div>
            <input className="field" placeholder="Subject" value={form.subject} onChange={update('subject')} aria-label="Subject" />
            <textarea className="field resize-none" rows={5} placeholder="Your Message..." required value={form.message} onChange={update('message')} aria-label="Your message" />
            <button type="submit" className="pill-btn solid">
              <WhatsappIcon className="w-4 h-4" /> Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
