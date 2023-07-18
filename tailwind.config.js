/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      colors: {
        maroon: {
          light: "#FBF2F2",
          DEFAULT: "#AA0601",
          dark: "#650300",
        },
        white: "#ffffff",
        time: "#707070",
        border: "#DEE2E6",
        brown: "#5F3E2D",
        lightbrown: "#B75929",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px", "54px", "96px"],
      },
      boxShadow: {
        based: "0px 2px 6px #00000029",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
