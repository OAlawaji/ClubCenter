export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sakry': '#FEFFEC', // Add your custom color here
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'almarai': ['Almarai', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontWeight: {
        'thin': '100',
        'normal': '300',
        'bold': '700',
        'black': '900',
        'extrabold': '800',
      },
      fontStyle: ['italic', 'normal'],
    },
  },
  plugins: [],
}