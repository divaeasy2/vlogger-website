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
        // Premium Adventure & Exploration Colors
        'adventure': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c2d6b',
        },
        // Vibrant Earth Tones
        'earth': {
          50: '#fef5f0',
          100: '#fde8de',
          200: '#fcc8ae',
          300: '#f9a97e',
          400: '#f27c4e',
          500: '#ea5d2a',
          600: '#d43c1a',
          700: '#b32216',
          800: '#8b1a12',
          900: '#6d1410',
        },
        // Forest Greens
        'forest': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-adventure': 'linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)',
        'gradient-adventure-dark': 'linear-gradient(135deg, #0c2d6b 0%, #15803d 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ea5d2a 0%, #f27c4e 100%)',
      },
    },
  },
  plugins: [],
}

