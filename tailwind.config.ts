import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: { float: 'float 3s ease-in-out infinite' },
      colors: {
        brand: { DEFAULT: '#2B3BFF', light: '#5A6BFF', dark: '#0A0C8C' },
        base: 'rgb(var(--c-base) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-surface2) / <alpha-value>)',
        tile1: 'rgb(var(--c-tile1) / <alpha-value>)',
        tile2: 'rgb(var(--c-tile2) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

export default config;
