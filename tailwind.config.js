/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'customGray': "#171717",
        'customGrayLight': "#444444",
        'customRed': "#DA0037",
        'customWhite': "#EDEDED",
      },
    },
  },
  plugins: [],
}

