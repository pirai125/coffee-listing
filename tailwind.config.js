/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        shadeblack:"#1B1D1F",
        grey:"#6F757C",
        lightgreen:"#BEE3CC",
        lightyellow:"#F6C768",
        lightorange:"#ED735D",
        lightwhite:"#FEF7EE",
        black:"#111315",
      },
      fontFamily:{
        dm_sans: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}