/** @format */

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { min: "301px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        weatherbg: "#506D84",
        headerbg: "#B8DFD8",
        pagebg: "#A7C4BC",
        selectbg: "#E1F1DD",
        cardbg: "#E6E6E6",
        countrypagebg: "#345B63",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
