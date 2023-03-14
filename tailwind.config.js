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
        // heading
        heading: "#EAEAEA",

        // background
        primaryBackground: "#5E2E53",
        cardBackground: "#E1A1E980",
        loginInputBackground: "#EAEAEA",
        searchInputBackground: "#C4C4C430",

        // text
        primaryText: "#ffffff",
        secondaryText: "#000000",
        placeholderText: "#999999",

        // button
        buttonText: "#E9E9E9",
        buttonBackground: "#5E2E53",

        // logo
        logoText: "#E856EB",
        logoBackground: "#913693",
      },
      backgroundImage: {
        splash: "url('../public/images/splash-image.jpg')",
      },
    },
  },
  plugins: [],
};
