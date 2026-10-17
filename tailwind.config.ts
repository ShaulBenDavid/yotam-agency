import type { Config } from 'tailwindcss';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mb: '375px',
      xs: '412px',
      sm: '568px',
      tb: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
        content: '1120px',
        prose: '820px',
      },
      borderRadius: {
        card: '4px',
      },
      gridTemplateColumns: {
        'cards-auto-fit': 'repeat(auto-fill, minmax(300px, 1fr))',
        'cards-xl-auto-fit': 'repeat(auto-fill, minmax(400px, 1fr))',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(26, 26, 26, 0.16)',
        lift: '0 12px 28px -12px rgba(7, 25, 82, 0.28)',
        sheet: '0 -8px 32px -8px rgba(7, 25, 82, 0.24)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        page: 'var(--color-page)',
        surface: 'var(--color-surface)',
        tint: 'var(--color-tint)',
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        'ink-muted': 'var(--color-ink-muted)',
        line: 'var(--color-line)',
        'line-soft': 'var(--color-line-soft)',
        accent: 'var(--color-accent)',
        'accent-strong': 'var(--color-accent-strong)',
        night: 'var(--color-night)',
        'night-line': 'var(--color-night-line)',
        'night-muted': 'var(--color-night-muted)',
        whatsapp: '#25D366',
        primary: {
          '50': '#e7f5ff',
          '100': '#d4edff',
          '200': '#b1ddff',
          '300': '#83c3ff',
          '400': '#529aff',
          '500': '#2b70ff',
          '600': '#0742ff',
          '700': '#003bff',
          '800': '#0335d0',
          '900': '#0d34a2',
          '950': '#071952',
        },
        secondary: {
          '50': '#ebfffd',
          '100': '#cdfffe',
          '200': '#a1feff',
          '300': '#60fbff',
          '400': '#19edf7',
          '500': '#00d0dd',
          '600': '#00a6ba',
          '700': '#088395',
          '800': '#116979',
          '900': '#125767',
          '950': '#053a47',
        },
        'light-gray': '#EBF4F6',
      },
      animation: {
        'fade-in-scale': 'fadeInScale 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        enterIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        enterInSideTabs: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        heroIn: {
          '0%': { transform: 'scale(1.06)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeInScale: {
          '0%': {
            filter: 'blur(30)',
            transform: 'scale(1.2) translate(-50%)',
          },
          '100%': { filter: 'blur(0)', transform: 'scale(1) translate(-50%)' },
        },
      },
    },
  },
  plugins: [scrollbar],
} satisfies Config;
