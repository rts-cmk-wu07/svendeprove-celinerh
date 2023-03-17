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
        large: "36px",
        xlarge: ["48px", "55px"],

        // logo
        logoSize1: ["36px", "30px"],
        logoSize2: ["72px", "50px"],
      },
      colors: {
        // heading
        heading: "#EAEAEA",

        // background
        primaryBackground: "#5E2E53",
        cardBackground: "#E1A1E9",
        loginInputBackground: "#EAEAEA",
        calendarCardBackground: "#EAEAEA",
        searchInputBackground: "#C4C4C430",

        // text
        primaryText: "#ffffff",
        secondaryText: "#000000",
        placeholderText: "#999999",
        searchIcon: "#EAEAEA",

        // button
        buttonText: "#E9E9E9",
        buttonBackground: "#5E2E53",

        // logo
        logoText: "#E856EB",
        logoLineBackground: "#913693",

        // navigation
        navigationBackground: "#E9E9E9",
      },
      backgroundImage: {
        splash: "url('../public/images/splash-image.jpg')",
      },
      boxShadow: {
        button: "3px 4px 4px rgba(0, 0, 0, 0.25)",
        logoLine: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        navigationTop: "0 -8px 20px -5px rgba(233, 233, 233, 0.2)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
