/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'win95-bg': '#008080',
        'win95-window': '#c0c0c0',
        'win95-border': '#000000',
        'win95-title': '#000080',
      },
      fontFamily: {
        'ms-sans': ['"MS Sans Serif"', 'sans-serif'],
      },
      backgroundImage: {
        'windows-desktop': "url('/windows_desktop.jpg')",
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        blink: 'blink-animation 1s steps(5, start) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'blink-animation': {
          'to': { visibility: 'hidden' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.blue.400"), 0 0 20px theme("colors.blue.600")',
      },
    },
  },
  plugins: [],
  safelist: [
    'fixed',
    'cursor-move',
    'w-[300px]',
    'h-[200px]',
    'shadow-lg',
    'shadow-neon',
  ],
}
