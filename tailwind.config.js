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
        borderInput:'rgb(23 79 237)',
        borderBox:'rgb(7, 232, 248)!important',
        textColor:'rgb(7, 232, 248)',
      },
      boxShadow: {
        'custom-hover': '0px 0px 19px rgb(0, 217, 255)',
      },
    },
    variants: {
      extend: {
        boxShadow: ['hover'],
      },
    },
  },
  plugins: [],
}