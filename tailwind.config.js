/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "#450C7D",
        dark: "#171717",
        black: "#000000",
        white: "#ffffff",
        secondary: "#171717",
        darkGrey: "#4e4e4e",
        lightGrey: {
          300: "#cecece",
          400: "#c8c8c8",
        },
        body: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
