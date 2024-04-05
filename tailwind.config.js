/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#000000",
        subtitle: "#000000",
        para: "#000000",
        para_light: "#000000",
        bg_1:"#4C00FF",
      },
      screens: {
        xs: "475px",
        mlg:"850px",
      }
    },
  },
  plugins: [],
}