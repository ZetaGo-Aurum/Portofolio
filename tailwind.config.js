/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#f4f4f5',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6BE',
          dark: '#AA8C2C',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float 6s ease-in-out infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
