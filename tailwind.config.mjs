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
      colors: {
        dark: '#232323',
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
};
