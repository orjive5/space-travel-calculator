/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/page_background.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
