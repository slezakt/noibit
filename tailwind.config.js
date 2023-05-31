/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      'purple': {
        400: '#743c90',
        500: '#8f4ee0',
        800: '#573a80'
      },
      'gray': {
        400: '#999999',
        500: '#808080',
      },
      'blue': '#2dafe5',
      'white': '#ffffff',
      'black': '#1a1a1a'
    }
  },
  plugins: [],
}

