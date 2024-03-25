/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        '16': "16px",
        '24': "24px",
      },
      fontFamily: {
        sans: ["Grotesk", "sans-serif"],
        heading: ["LTera", "sans-serif"],
      },
    },
  },
  plugins: [],
};
