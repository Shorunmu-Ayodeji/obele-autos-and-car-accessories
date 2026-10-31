'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggle = () => {
    const next = !isLight;
    document.documentElement.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
    setIsLight(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.04] text-ink/80 transition hover:bg-ink/10 hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand/50"
    >
      {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
