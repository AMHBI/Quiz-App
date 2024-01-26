/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/js/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "back-grad": "radial-gradient(#8ECAE6,#023047)",
      },
      colors: {
        "primary": "#FFB703",
        "primary-hover": "#FB8500",
        "back" : "#023047"
      },
    },
  },
  plugins: [],
};
