module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
      },
    },
    colors: {
      "light-gray" : "hsl(223, 19%, 93%)",
      "very-light-gray" : "hsl(228, 33%, 97%)",
      "grayish-blue" : "hsl(211, 10%, 45%)",
      "dark-blue" : "hsl(212, 24%, 26%)",
      "moderate-blue" : "hsl(238, 40%, 52%)",
      "light-grayish-blue" : "hsl(239, 57%, 85%)",
      "soft-red" : "hsl(358, 79%, 66%)",
      "pale-red" : "hsl(357, 100%, 86%)",
      white: "#fff"
    }
  },
  plugins: [],
}
