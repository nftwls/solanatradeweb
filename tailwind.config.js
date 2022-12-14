/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pearl-white': '#FAFAFF',
        'sea-green': '#18F9D8',
        'dark-blue': '#202740',
        'dull-gray': '#7986A8',
        'blue-gray': '#E2E8F0',
        'dracula': '#444444',
      },
    },
  },
  plugins: [],
}
