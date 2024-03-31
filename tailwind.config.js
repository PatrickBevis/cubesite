// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '16': "16px",
        '24': "24px",
      },
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
        lTera: ["LTera", "sans-serif"],
      },
    },
  },
  extend: {
  },
  plugins: [],
};
