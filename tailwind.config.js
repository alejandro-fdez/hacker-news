/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': 'var(--primary-red)',
        'primary-red-dark': 'var(--primary-red-dark)',
      },
    },
  },
  plugins: [],
};
