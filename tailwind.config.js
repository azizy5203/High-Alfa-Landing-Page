/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },

    // fontSize: {
    //   xs: ".625rem",
    //   sm: ".75rem",
    //   md: ".875rem",
    //   base: "1rem",
    //   lg: "1.125rem",
    //   xl: [
    //     "1.25rem",
    //     {
    //       lineHeight: "2",
    //       fontWeight: "700",
    //     },
    //   ],
    //   "2xl": ["1.5rem", {}],
    //   "3xl": ["2.5rem", {}],
    //   "6xl": [
    //     "4rem",
    //     {
    //       fontWeight: "700",
    //     },
    //   ],
    // },

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

      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
