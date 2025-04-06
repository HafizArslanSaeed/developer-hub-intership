/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indejo-light': "#E5F1FF",
        'dark-blue': "#55BDC3",
        'dark-orange': "#F38332",

        
      },
    },
  },
  plugins: [],
}
