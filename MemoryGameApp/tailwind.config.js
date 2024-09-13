/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      keyframes: {
        card: {
          "0%, 100%": { backgroundColor: "#ff9c9c" },
          "50%": { backgroundColor: "white" },
        },
      },
      animation: {
        card: "card 1s ease-in-out 1 forwards",
      },
    },
  },
  plugins: [],
};
