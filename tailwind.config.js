/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quill-gray':'#DBDBD3',
        'heavy-metal':'#262E26',
        'red-damask':'#E37435',
        'light-red-damask':'#e88e5b',
        'stack':'#7E847C',
      },
    },
  },
  plugins: [],
}
