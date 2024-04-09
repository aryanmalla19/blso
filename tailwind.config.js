/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":['Poppins'],
        "lato":['Lato'],
        "montserrat":['Montserrat']
      },
      colors:{
        'first':"#00947F",
        'second':'#0182D7',
        'third':'#0D2420',
        'wow':'#DCE9E6'
      }
    },
  },
  plugins: [],
}