import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
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
        enterIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { translate: 'translateX(0%)' },
        },
        enterInSideTabs: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '100%': { translate: 'translateY(0)', opacity: '1' },
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
  plugins: [],
} satisfies Config;
