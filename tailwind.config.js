/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#28396C', /* Your chosen base color */
          light: '#7A9CF5',   /* Lighter version for readable text */
          dark: '#1A2548'     /* Darker version for deep backgrounds */
        }
      }
    },
  },
  plugins: [],
}