/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'artesanato-background': '#FAF6F1',
        'artesanato-accent': '#A9A278',
        'artesanato-accent-hover': '#8A8364',
        'artesanato-text': '#4A3F35',
        'artesanato-natural': '#A9BDA6',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'title': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
