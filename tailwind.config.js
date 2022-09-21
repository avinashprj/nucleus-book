/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sen: ["Sen", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
        white: "#FFF",
      },
    },
  },

  plugins: [],
};
