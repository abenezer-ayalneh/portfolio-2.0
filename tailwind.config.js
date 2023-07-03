/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-background-image': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}