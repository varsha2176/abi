/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F3EC',
          light: '#FDFCFA',
          warm: '#F4ECE1',
        },
        champagne: {
          DEFAULT: '#E8D8C6',
          light: '#F2E8DC',
          dark: '#D8C3AC',
        },
        dustyrose: {
          DEFAULT: '#C99594',
          light: '#DFB3B2',
          dark: '#A66E6D',
        },
        burgundy: {
          DEFAULT: '#642C3B',
          light: '#7F3A4C',
          dark: '#4D1D2A',
        },
        wine: {
          DEFAULT: '#471D2C',
          light: '#5A2638',
          dark: '#30121D',
        },
        espresso: {
          DEFAULT: '#30221F',
          light: '#42312D',
          dark: '#1F1513',
        },
        blush: {
          DEFAULT: '#EAD5D2',
          light: '#F5E8E6',
          dark: '#D7BAB6',
        },
        cinematic: {
          dark: '#171313',
          mid: '#241A1B',
          accent: '#3B2028',
        }
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        borel: ['"Borel"', 'cursive'],
        allura: ['"Allura"', 'cursive'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'super-wide': '0.35em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.4' },
        },
        envelopeOpen: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(180deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
