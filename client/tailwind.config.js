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
        128: "30rem",
      },
      width: {
        300: "50rem",
      },
    },
  },
  plugins: [],
}
