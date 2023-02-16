/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "375px",
      md: "414px",
      lg: "601px",
      xl: "768px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#fffffc",
          200: "#e6e6e3",
          300: "#ccccca",
          400: "#b3b3b0",
          500: "#999997",
          600: "#80807e",
          700: "#666665",
          800: "#4c4c4c",
          900: "#333332",
          1000: "#191919",
        },
      },
    },
  },
  plugins: [],
};
