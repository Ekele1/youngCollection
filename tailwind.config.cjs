/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
