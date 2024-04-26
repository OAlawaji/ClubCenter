export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif']
      },
      fontWeight: {
        'thin': '100',
        'normal': '400',
        'bold': '700',
        'black': '900',
      },
      fontStyle: ['italic', 'normal'], // Add this line
    },
  },
  plugins: [],
}