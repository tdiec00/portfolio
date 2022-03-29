module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        blackbg: "#010101",
        eee: "#eeeee",
      },
      backgroundImage: {
        iTerm: "url('../src/images/iterm-image.jpeg')",
      },
      height: {
        100: "20rem",
        105: "35rem",
        128: "30rem",
        150: "40rem",
        200: "50rem",
        250: "60rem",
        300: "100rem",
        400: "185rem",
        500: "230rem",
      },
      width: {
        300: "50rem",
        100: "25rem",
        105: "40rem",
      },
    },
  },
  plugins: [],
}
