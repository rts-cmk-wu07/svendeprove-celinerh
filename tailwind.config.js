/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RacingSansOne: ["Racing Sans One", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        small: ["18px", "21px"],
        medium: ["24px", "28px"],
        large: ["36px", "41px"],
        xlarge: ["48px", "55px"],
        logo: "72px",
      },
      colors: {
        heading: "#EAEAEA",
        primaryBackground: "#5E2E53",
        secondaryBackground: "#E1A1E980",
        tertiaryBackground: "#EAEAEA",
        quaternaryBackground: "#C4C4C430",
        primaryText: "#ffffff",
        secondaryText: "#000000",
        tertiaryText: "#E9E9E9",
        quaternaryText: "#999999",
        primaryLogoText: "#E856EB",
        primaryLogoStroke: "#431567",
        secondaryLogoStroke: "#000000",
        primaryLogoBackground: "#913693",
      },
    },
  },
  plugins: [],
};
