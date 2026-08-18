/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      ivory: '#faf8f5',
      primary: '#9a5b1a',
      'primary-strong': '#7a3d10',
      'primary-soft': '#f4e1c5',
      beige: '#e8dcc8',
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
      neutral: {
        800: '#2d3748',
      },
      white: '#ffffff',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontFamily: {
      body: ['Inter', 'system-ui', 'sans-serif'],
      display: ['"Playfair Display"', 'Georgia', 'serif'],
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
