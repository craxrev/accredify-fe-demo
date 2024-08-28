/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Proxima Nova', 'sans-serif'],
      },
      colors: {
        grey: "#5B6270",
        black: {
          DEFAULT: "#000000",
          light: "#151F32",
        },
        accent: "#493DF5",
      }
    },
  },
  plugins: [],
}

