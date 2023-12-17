/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      title : ['Eczar'],
      another : ['Courgette'],
      title2 : ['Playfair Display'],
      para : ['Montserrat'],
      oswald : ['Oswald'],
      kumbhsans : ['Kumbh Sans']
    }
  },
  plugins: [],
}

