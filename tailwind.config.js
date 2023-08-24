/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#0891b2',
        kadua: '#fbbf24',
        katilu: '#10b981',
        kaopat: '#fde68a',
        dark: '#262626',
        darkngora: '#475569',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
