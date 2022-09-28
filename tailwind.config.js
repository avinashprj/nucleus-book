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
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
        lightYellow: "#feda75",
        orange: "#fa7e1e",
        pink: "#d62976",
        purple: "#962fbf",
        blue: "#4f5bd5",
        "gray-800": "#102a42",
      },
    },
  },

  plugins: [],
};
