/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A2CA71',
        'extra-dark': '#387F39',
        "dark": "#BEDC74",
        "light": "#F6E96B",
      }
    },
  },
  plugins: [],
} 