/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],

  theme: {
    extend: {
      colors: {
        black: "#2C2E43",
        grey: "#595260",
        L_grey: "#B2B1B9",
        yellow: "#FFD523",
      },
    },
  },
  plugins: [],
};
