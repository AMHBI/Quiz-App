/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./js/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "back-grad": "radial-gradient(#28b8d5,#020344)",
      },
    },
  },
  plugins: [],
};
