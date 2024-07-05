/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        inputColor:'#121829',
        borderInput:'rgb(23 79 237)'
      }
    },
  },
  plugins: [],
}