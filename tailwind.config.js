/* eslint-disable-next-line */
const defaultConfig = require("tailwindcss/defaultConfig");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultConfig.theme.fontFamily.sans]
    },
    extend: {
      colors: {
        'a-dark': {
          100: "#161E28",
          200: "#161D26",
          300: "#12181F",
          //
          900: "#0B0E13",
        },
        'a-red': "#FF3E46",
        'a-green': "#0CAF60",
        'a-dgreen': "#B1FE34",
        'a-white': {
          100: '#808195',
          200: '#C3CDDB',
          300: '#C4C4C4',
          900: '#FFFFFF'
        }
      },
      borderRadius: {
        '1.5xl': '14px',
        '2.5xl': '20px',
        '4xl': '25px',
        'app': '2.313rem',
      }
    }
  },
  plugins: []
};
