/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        orbit: 'orbit 30s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(400px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(400px) rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
