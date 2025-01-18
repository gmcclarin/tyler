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
        "olive": "#B6C4B6",
        "darker" : "#1e3118",
        "dark" : "#578E44",
        // "baseColor" : "#EEF0E5",
        "baseColor":"#e7e1da",
        "accent" :"#cc6600",
        "logoBg" : "#558c44",
        "logoTree" : "#c2e3b6"
        // white : 

      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
        marquee3: 'marquee3 40s linear infinite',
        marquee4: 'marquee4 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

