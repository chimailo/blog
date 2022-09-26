/** @type {import('tailwindcss').Config} */
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
        primary: {
          50: "#e9f4fc",
          100: "#d2e9f9",
          200: "#a6d2f2",
          300: "#79bcec",
          400: "#4da6e5",
          500: "#208fdf",
          600: "#1a73b3",
          700: "#135686",
          800: "#0d3959",
          900: "#061d2d",
        },
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
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
