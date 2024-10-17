/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',     // Custom primary color
        secondary: '#2ecc71',   // Custom secondary color
        dark: '#282828',        // Custom dark color
      },
    },
  },
  plugins: [],
}

