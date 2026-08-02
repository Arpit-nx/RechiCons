/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      gold: {
        300: '#d4af37',
        400: '#d4a574',
        500: '#c9a961',
        600: '#b8860b',
      },
      sand: {
        50: '#faf8f5',
        200: '#e8dcc8',
        300: '#dcc9a8',
      },
      ink: {
        600: '#4b5563',
        800: '#2d3748',
        900: '#1a202c',
        950: '#0a0b0d',
      },
      white: '#ffffff',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontFamily: {
      display: ['system-ui', 'sans-serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin-slow 20s linear infinite',
      'float-slow': 'float-slow 6s ease-in-out infinite',
      'float-slower': 'float-slower 8s ease-in-out infinite',
    },
    keyframes: {
      'spin-slow': {
        'from': { transform: 'rotate(0deg)' },
        'to': { transform: 'rotate(360deg)' },
      },
      'float-slow': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(20px)' },
      },
      'float-slower': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(30px)' },
      },
    },
  },
  plugins: [],
}
