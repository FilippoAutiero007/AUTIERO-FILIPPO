/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'apple-blue': '#0071E3',
        'apple-text': '#1D1D1F',
        'apple-secondary': '#86868B',
        'apple-gray': '#F5F5F7',
        'apple-border': '#D2D2D7',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.04)',
        'hover': '0 10px 30px rgba(0,0,0,0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}