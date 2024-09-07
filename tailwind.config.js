/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{vue,js.ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-primary": "#ED702D",
        "app-bg": "#202020",
        "app-card-bg": "#343434",
        "app-text-dark": "#1F2020",
        "app-text-grey": "#B8B8B8",
        "app-label": "#FFFFFF66",
      }
    },
    fontFamily: {
      Barlow: ["'Barlow', sans-serif"]
    }
  },
  plugins: [],
}

