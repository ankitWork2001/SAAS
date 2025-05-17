/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-900': '#121063', // your color
      },
      animation: {
        orbit: 'orbit 20s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(300px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(300px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
