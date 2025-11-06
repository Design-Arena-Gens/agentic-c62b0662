'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const rotatingWords = ['AngularJS wizardry', 'ES6 rocket fuel', 'hands-on hacking', 'playful missions'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % rotatingWords.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="section" style={{ position: 'relative', paddingTop: '90px' }}>
      <div className="hero-glow" />
      <div className="badge">
        <span role="img" aria-label="rocket">🚀</span>
        AngularJS Adventure Academy
      </div>
      <h1 className="hero-title" style={{ marginTop: '26px' }}>
        Master {rotatingWords[wordIndex]}<br />
        one playful quest at a time.
      </h1>
      <p className="tagline">
        From JavaScript ES6 boosters to full-stack AngularJS adventures, this course is your co-pilot.
      </p>
      <div style={{ marginTop: '32px', display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        <Link href="#missions" className="cta">
          Start Mission Briefing
        </Link>
        <Link
          href="#playground"
          className="cta"
          style={{ background: 'transparent', border: '1px solid rgba(91, 141, 239, 0.6)', color: 'var(--text)' }}
        >
          Hack in the Playground
        </Link>
      </div>
    </header>
  );
}
