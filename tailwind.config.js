/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", "[data-theme=dark]"],
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // primary: "#44bb00",
        // slate: { 950: "#0b101d" },
        "slate-950": "#0b101d",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
