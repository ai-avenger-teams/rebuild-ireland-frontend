/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#faf8f6',
        primarylight: '#fcfbfa',
        secondary: '#ede8e1',
        customGreen: '#3b4a20',
        customLightGreen: '#4c602a',
      },
    },
  },
  plugins: [],
};
