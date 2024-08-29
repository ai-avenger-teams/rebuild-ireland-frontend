/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#faf8f6",
        primarylight: "#fcfbfa",
        secondary: "#ede8e1",
        customGreen: "#3b4a20",
        customLightGreen: "#4c602a",
        veryLightGreen: "#c9cfbf",
        customBrown: "#353024",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },

      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
};
