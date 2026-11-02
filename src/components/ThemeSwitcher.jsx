import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const DEFAULT_ACCENT = '#f43f5e';
const STORAGE_KEY = 'accent-v2';

const ACCENTS = [
  { name: 'Electric Blue', value: '#0056ff' },
  { name: 'Terracotta', value: '#e07252' },
  { name: 'Violet Glow', value: '#4f3beb' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Rose', value: '#f43f5e' },
];

// The portrait artwork has a red rim light baked in; rotate its hue so it follows the accent.
const PORTRAIT_BASE_HUE = 350;

function hexToHue(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  if (d === 0) return 0;
  let h;
  if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return (h * 60 + 360) % 360;
}

function readSaved() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_ACCENT;
  } catch {
    return DEFAULT_ACCENT;
  }
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState(readSaved);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--portrait-hue', `${Math.round(hexToHue(accent) - PORTRAIT_BASE_HUE)}deg`);
    try {
      localStorage.setItem(STORAGE_KEY, accent);
    } catch {
      /* storage unavailable */
    }
  }, [accent]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex gap-2 p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl">
          {ACCENTS.map((a) => (
            <button
              key={a.value}
              type="button"
              aria-label={a.name}
              title={a.name}
              onClick={() => setAccent(a.value)}
              className={`swatch ${accent === a.value ? 'active' : ''}`}
              style={{ '--swatch': a.value }}
            />
          ))}
        </div>
      )}
      <button
        type="button"
        aria-label="Change accent color"
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full border border-white/15 bg-black/60 backdrop-blur-xl flex items-center justify-center text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
}
