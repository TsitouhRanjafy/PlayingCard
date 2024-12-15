/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'shadow':"#fff"
    },
    extend: {
      width: {
        'a':'20%'
      },
      minWidth:{
        'j':'100%'
      }
    },
  },
  plugins: [],
}

