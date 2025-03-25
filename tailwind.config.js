/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'migra': ['migra', 'serif'],
        'ginger': ['ginger', 'sans-serif'],
        'monument': ['"Monument Extended"', 'sans-serif'],
      },
      colors: {
        'sage': '#94A187',
        'truffle': '#2C2C2C',
        'cream': '#F5F1EA',
        'copper': '#B87456',
        'moss': '#414C3B',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}
