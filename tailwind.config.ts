/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#39FF14',
        neonPink: '#FF1493',
        neonYellow: '#FFFF33',
      },
      fontFamily: {
        retro: ['"Comic Sans MS"', 'cursive'],
        mono: ['"Courier New"', 'monospace'],
      },
      keyframes: {
        'blink': {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
