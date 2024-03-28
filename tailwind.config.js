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
    animation: {
      'slide-left': 'slideLeft 0.3s ease-out forwards',
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100px)' },
      },
    },
  },
  plugins: [],
};
