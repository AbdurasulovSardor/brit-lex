/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1020px",
    },
    extend: {
      colors: {
        firstColor: "#263238",
        textColor: "#8F95A5",
        borderColor: "#F5F5F5"
      }
    },
    container: {
      center: true,
      screens: {
        lg: '100%',
        xl: '1240px',
        '2xl': '1340px',
      },
    },
  },
  plugins: [],
}