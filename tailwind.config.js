/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

