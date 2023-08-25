/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    screens: {
      sm: 576 + 24 + "px",
      md: 768 + 32 + "px",
      lg: 960 + 48 + "px",
      xl: 1152 + 64 + "px",
    },
    extend: {
      colors: {
        "main-100": "#E6F4F2",
        "main-200": "#A6D8DE",
        "main-300": "#79C4CD", // links, dark
        "main-400": "#017f76", // links, light
        "main-500": "#344f60", // or #2F4858
        "main-600": "#22343f",
        "main-700": "#162127", // or #1D2C35
      },
      fontFamily: {
        sans: ["var(--font-asap)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        28: "7rem",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
    },
  },
  plugins: [],
};
