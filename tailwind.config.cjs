/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sliderFull: "hsl(174, 77%, 80%)",
        sliderEmpty: "hsl(224, 65%, 95%)",
        sliderBackground: "hsl(174, 86%, 45%)",
        discountBackground: "hsl(14, 92%, 95%)",
        discountText: "hsl(15, 100%, 70%)",
        CTAText: "hsl(226, 100%, 87%)",
        primaryBackground: "hsl(230, 100%, 99%)",
        toggleBackground: "hsl(223, 50%, 87%)",
        text: "hsl(225, 20%, 60%)",
        textBackground: "hsl(227, 35%, 25%)",
        CTABackground: "hsl(227, 35%, 25%)",
      },
    },
    fontFamily: {
      body: ['"Manrope"', "sans-serif"],
    },
  },
  plugins: [],
};
