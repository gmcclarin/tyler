// import hp from "./src/photos/homeplaceholder.jpg"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        "homeplaceholder": "url('/src/photos/homeplaceholder.jpg')",
      },
      colors : {
        // black
        "olive": "#253300",
        "darker" : "#352D28",
        "dark" : "#9C8B7E",
        "base" : "#D5D2CD",
        "accent" :"#cc6600"
        // white : 

      }
    },
  },
  plugins: [],
}

