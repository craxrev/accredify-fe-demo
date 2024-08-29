/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Proxima Nova", "sans-serif"],
        pulp: ["Pulp Display", "sans-serif"],
      },
      colors: {
        grey: "#5B6270",
        black: {
          DEFAULT: "#000000",
          light: "#151F32",
          "extra-light": " #353d4e",
        },
        accent: "#493DF5",
      },
      fontSize: {
        sm: ["14px", "24px"],
        "2xl": ["22px", "44px"],
      },
    },
  },
  plugins: [],
};
