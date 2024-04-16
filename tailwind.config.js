/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        darker: '#1a1a1a',
      },
      animation: {
        spin: 'spin 2s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark:hover', 'dark:focus'],
      textColor: ['dark', 'dark:hover', 'dark:focus'],
    },
  },
  plugins: [

    function ({ addUtilities }) {
      const newUtilities = {
        '.filter-invert': {
          filter: 'invert(1)',
        },
      };

      addUtilities(newUtilities, ['dark']);
    },
  ],
};





  