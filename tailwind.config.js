/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    "bg-[url('/images/problemSection.webp')]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
