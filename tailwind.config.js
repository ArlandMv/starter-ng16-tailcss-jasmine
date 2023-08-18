/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-debug-screens"),
    require("tailwindcss-brand-colors"),
  ],
};
