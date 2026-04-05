/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#f8fafc',
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
