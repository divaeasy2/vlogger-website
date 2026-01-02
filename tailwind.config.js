/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode - Nature-inspired colors
        'sage': {
          50: '#f6f7f4',
          100: '#edeee9',
          200: '#d9ddd3',
          300: '#c5ccbd',
          400: '#a8b29a',
          500: '#8b987c',
          600: '#6b7a60',
          700: '#556349',
          800: '#3f4a35',
          900: '#2d3323',
        },
        // Warm earth tones
        'earth': {
          50: '#faf8f4',
          100: '#f5f0e8',
          200: '#e8dfd0',
          300: '#dcceb8',
          400: '#cab597',
          500: '#b89a76',
          600: '#a0805c',
          700: '#876848',
          800: '#6d5239',
          900: '#54402a',
        },
        // Ocean/Sky blues
        'sky': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#c7e3fd',
          300: '#a3d5fc',
          400: '#7ac2f9',
          500: '#5ab0f5',
          600: '#3b94e8',
          700: '#2c77d4',
          800: '#235ca8',
          900: '#1d4a85',
        },
      },
      backgroundImage: {
        'gradient-nature': 'linear-gradient(135deg, #f0f7ff 0%, #f6f7f4 100%)',
        'gradient-nature-dark': 'linear-gradient(135deg, #1a2e2e 0%, #2d3323 100%)',
      },
    },
  },
  plugins: [],
}
