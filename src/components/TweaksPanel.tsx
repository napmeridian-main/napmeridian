'use client';

import { useEffect, useState } from 'react';

const STORE_KEY = 'napmeridian.tweaks.v2';

const palettes = [
  { id: 'azure',    name: 'Azure',      colors: ['#0a1421', '#1d4ed8', '#ffffff'] },
  { id: 'oceanic',  name: 'Oceanic',    colors: ['#0a2540', '#c08a3e', '#f5f1ea'] },
  { id: 'heritage', name: 'Heritage',   colors: ['#0d3b2e', '#b8860b', '#faf7f2'] },
  { id: 'midnight', name: 'Midnight',   colors: ['#0d1b2a', '#d4af37', '#f8f6f1'] },
  { id: 'mono',     name: 'Monochrome', colors: ['#1a1a1a', '#c54a1f', '#ffffff'] },
];

const types = [
  { id: 'editorial', name: 'Editorial',  spec: 'Instrument · Manrope' },
  { id: 'modern',    name: 'Modern',     spec: 'Newsreader · DM Sans' },
  { id: 'classical', name: 'Classical',  spec: 'Cormorant · Outfit' },
];

export default function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState('azure');
  const [type, setType] = useState('editorial');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
      if (saved.palette) setPalette(saved.palette);
      if (saved.type) setType(saved.type);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    document.documentElement.setAttribute('data-type', type);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ palette, type }));
    } catch {}
  }, [palette, type]);

  return (
    <>
      <button className="tweaks-fab" title="Open Tweaks" onClick={() => setOpen(o => !o)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>
        </svg>
      </button>

      {open && (
        <div className="tweaks-panel" style={{ position: 'fixed' }}>
          <button className="tweaks-close" aria-label="Close tweaks" onClick={() => setOpen(false)}>×</button>

          <div className="tweak-section">
            <h5>Color palette</h5>
            <div className="swatch-row">
              {palettes.map(p => (
                <button
                  key={p.id}
                  className={`swatch${palette === p.id ? ' active' : ''}`}
                  title={p.name}
                  onClick={() => setPalette(p.id)}
                >
                  <span className="a" style={{ background: p.colors[0] }} />
                  <span className="b" style={{ background: p.colors[1] }} />
                  <span className="c" style={{ background: p.colors[2] }} />
                </button>
              ))}
            </div>
          </div>

          <div className="tweak-section">
            <h5>Typography</h5>
            <div className="type-row" style={{ flexDirection: 'column' }}>
              {types.map(t => (
                <button
                  key={t.id}
                  className={`type-btn${type === t.id ? ' active' : ''}`}
                  onClick={() => setType(t.id)}
                >
                  <div className="t-name">{t.name}</div>
                  <div className="t-spec">{t.spec}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
