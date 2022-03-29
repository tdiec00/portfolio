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
        128: "30rem",
        200: "60rem",
        300: "120rem",
        500: "275rem",
      },
      width: {
        300: "50rem",
        100: "25rem",
      },
    },
  },
  plugins: [],
}
