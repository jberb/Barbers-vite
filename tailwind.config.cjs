/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      crimson: ["Crimson-Text", "sans-serif"],
    },
    extend: {
      height: {
        128: "32 rem",
      },
      width: {
        128: "32 rem",
      },
      backgroundImage: {
        "bg-1": "url('/src/img/b.jpg')",
        "bg-2": "url('/src/img/bb2.png')",
        "bg-3": "url('/src/img/bb1.png')",
      },
    },
  },
  plugins: [],
};
