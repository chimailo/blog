/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    screens: {
      sm: 480 + 32 + "px",
      md: 768 + 32 + "px",
      lg: 960 + 64 + "px",
      xl: 1152 + 64 + "px",
    },
    extend: {
      colors: {
        main: "#13233D",
      },
      fontFamily: {
        'sans': ['Asap', ...defaultTheme.fontFamily.sans],
        'serif': ['Playfair Display', ...defaultTheme.fontFamily.serif],
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
