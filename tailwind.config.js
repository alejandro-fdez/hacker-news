/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#ff6600',
        'primary-red-dark': '#da5700',
      },
    },
  },
  plugins: [],
};
