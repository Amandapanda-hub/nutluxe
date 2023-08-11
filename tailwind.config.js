/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chewy': ['Chewy', 'sans-serif'],
        'sriracha': ['Sriracha', 'sans-serif']
      }
    },
  },
  plugins: [],
}

