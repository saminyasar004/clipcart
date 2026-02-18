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
        primary: '#064491',
        'primary-dark': '#04326b',
        'primary-light': '#2e63a8',
        'primary-soft': '#06449115',
        secondary: '#007b8c',
        accent: '#f2a206',
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
