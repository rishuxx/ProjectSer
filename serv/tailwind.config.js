/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFCD03",
        orange: "#FF7F00",
        orange_y: "#2596be",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};
