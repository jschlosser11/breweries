/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        // 'mainHero': "url('/img/mainHero.jpeg')",
        // 'tapsHero': "url('/images/beerTaps.webp')",
      },
      colors: {
        'cream': '#FFFDD0',
      },
      fontFamily: {
        'bebas': ['Bebas Neue']
      }
    }
  },
  plugins: [require("daisyui")],
};