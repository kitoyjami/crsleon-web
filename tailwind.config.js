import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#bd1714',
          dark: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
