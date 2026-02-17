/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        primary: '#1dd881',
        'primary-dark': '#15a363',
        'primary-light': '#5df5a6',
        'primary-soft': '#1dd88115',
        foreground: '#1a1a1a',
        background: '#f8fafc',
        'card-bg': '#ffffff',
        'muted-text': '#8e8e93',
        'border-gray': '#e5e7eb',
      },
    },
  },
  plugins: [],
};
