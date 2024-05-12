/** @type {import('tailwindcss').Config} */

const spacing = {
  '3xs': 'var(--space-3xs)',
  '2xs': 'var(--space-2xs)',
  xs: 'var(--space-xs)',
  small: 'var(--space-s)',
  sm: 'var(--space-s-m)',
  sl: 'var(--space-s-l)',
  medium: 'var(--space-m)',
  ml: 'var(--space-ml)',
  large: 'var(--space-l)',
  huge: 'var(--space-xl)',
  '2x': 'var(--space-2xl)',
  '3x': 'var(--space-3xl)',
  '4x': 'var(--space-4xl)',
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  theme: {
    extend: {
      padding: spacing,
      margin: spacing,
      gap: spacing,
      colors: {
        dark: '#232323',
        code: '#292a2b',
        teal: '#19f9d7',
      },
      fontSize: {
        min: 'var(--step-00)',
        headline: 'var(--step-8)',
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
};
