/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E7E1D4",
        ink: "#241E17",
        momiji: "#A8321F",
        ochre: "#9C7020",
        pine: "#4A5A44",
        line: "#CDC3AF",
        card: "#FBF8F1",
      },
      fontFamily: {
        display: [
          "var(--font-shippori-mincho)",
          "'Hiragino Mincho ProN'",
          "serif",
        ],
        sans: [
          "var(--font-zen-kaku-gothic-new)",
          "'Hiragino Kaku Gothic ProN'",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
};
