/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secundary-400": "#FFCD58",
        "secundary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./src/assets/Bioaqua.jpg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat:  ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./src/assets/Bioaqua.jpg')",
        abstractwaves: "url('./src/assets/Bioaqua.jpg')",
        sparkles: "url('./src/assets/Bioaqua.jpg')",
        cirlces: "url('./src/assets/Bioaqua.jpg')",
      }
    },
    screens: {
      xs: "480px", 
      sm: "768px", 
      md: "1060px", 
    }
  },
  plugins: [],
}