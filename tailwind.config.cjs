/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fca61c",
        grey: "#22272E",
        blue: "#121F3D",
      },
    },
  },
  plugins: [],
};
