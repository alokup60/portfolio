/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { poppins: ["Poppins", "sans-serif"] },
    colors: {
      textBlack: "#000000",
      textGray: "#525466",
      textWhite: "#FFFFFF",
      bgColor: "#C7E5DC", //46%
      highColor: "#683AFA",
      borderColor: "#A85FED",
    },
  },

  plugins: [],
};
