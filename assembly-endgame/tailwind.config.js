/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#F9F4DA",
        background: "#282726",
        key: "#FCBA29",
        wordBox: "#323232",
        border: "#F9F4DA"
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}