/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".mix-blend-color-burn": {
          "mix-blend-mode": "color-burn",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
