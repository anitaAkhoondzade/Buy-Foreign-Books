/** @type {import('tailwindcss').Config} */
import colors from './src/theme/colors.json'

export default {

  important: true, // Teilwind is more important than css
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors,
    },
  },
  plugins: [],
}
