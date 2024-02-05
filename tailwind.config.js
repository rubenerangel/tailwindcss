/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", "[data-theme=dark]"],
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
