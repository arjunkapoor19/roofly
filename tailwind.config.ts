import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        orange: {
          100: '#fed7aa',
          400: '#fb923c',
          500: '#f97316',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
      }
    },
  },
  plugins: [],
};

export default config;
