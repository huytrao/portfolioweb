/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Apple-style palette: neutral surfaces, one accent
        primary: "#ffffff",
        surface: "#f5f5f7",
        ink: "#1d1d1f",
        secondary: "#6e6e73",
        accent: "#0071e3",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
