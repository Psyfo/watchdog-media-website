/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        watchdog: {
          purple: '#510051',
          light: '#D9D9D9',
          dark: '#4C4C4C',
          yellow: '#FFF200',
          pink: '#EC008C',
        },
      },
      fontFamily: {
        noteworthy: ['Noteworthy', 'sans-serif'],
        myriad: ['Myriad Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
