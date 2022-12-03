/* eslint-disable import/no-absolute-path */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sen: ["Sen", "sans-serif"],
    },
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      animation: {
        "spin-fast": "spin 0.7s linear infinite",
      },
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
          1000: "000",
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
      width: {
        68: "68px",
        88: "88px",
        275: "275px",
        290: "290px",
        350: "350px",
        600: "600px",
      },
    },
    variants: {
      extend: {
        backgroundColor: ["disabled"],
      },
    },
  },

  // eslint-disable-next-line global-require, import/no-unresolved
  plugins: [require("flowbite/plugin")],
};
