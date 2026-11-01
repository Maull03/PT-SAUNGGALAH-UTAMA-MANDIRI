/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Archivo', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Courier Prime"', '"Courier New"', 'ui-monospace', 'monospace'],
      },
      fontWeight: {
        light: 300,
        w350: 350,
        regular: 400,
        medium: 500,
      },
      colors: {
        'forest-depths': '#1c3a13',
        'lime-pulse': '#d3fa99',
        'sage-moss': '#757c5d',
        'olive-gold': '#9f995b',
        'eucalyptus': '#698e79',
        'snow-white': '#fcfcf7',
        'warm-stone': '#eeeee9',
        'frosted-glass': '#c4c7c4',
        'ash': '#b3b3b3',
        'pewter': '#666666',
        'ink': '#000000',
        'brand-gold': '#fcbc5b',
        gold: {
          DEFAULT: '#fcbc5b',
          50: '#fffbf0',
          100: '#fef5d6',
          200: '#fde7a8',
          300: '#fcd375',
          400: '#fcbc5b',
          500: '#f59e1b',
          600: '#d9790c',
        },
        brand: {
          dark: '#1c3a13',
          navy: '#29364F',
          gold: '#fcbc5b',
          accent: '#fcbc5b',
          light: '#fcfcf7',
          card: '#eeeee9',
          silver: '#b3b3b3',
        }
      },
      borderRadius: {
        'cards': '16px',
        'large-cards': '32px',
        'full': '1000px',
        'inputs': '8px',
      },
      boxShadow: {
        'none': 'none',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
