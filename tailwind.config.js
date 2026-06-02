/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F26622',
        'brand-blue': '#004D66',
        'brand-grey': '#EBEBEB',
        'bg-dark': '#0a0a0a',
        'text-light': '#f5f5f5',
        'text-muted': '#a1a1aa',
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '26': '6.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}