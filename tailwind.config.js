/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siteBg: "#6E07F3",
        sitegreen: "#5BE9B9",
        textBlack: "#141c3a",
      },
      fontFamily: {
        poppins: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        '15': 'repeat(auto-fit, minmax(300px, 1fr))',
        '16': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
    }
  },
  plugins: [],
}
