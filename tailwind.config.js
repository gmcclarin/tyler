// import hp from "./src/photos/homeplaceholder.jpg"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        "homeplaceholder": "url('/src/photos/homeplaceholder.jpg')",
      }
    },
  },
  plugins: [],
}

