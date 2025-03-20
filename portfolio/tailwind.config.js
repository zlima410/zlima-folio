/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // enable dark mode with class
  theme: {
    extend: {
      colors: {
        primary: "#F9013F",
        darkBg: "#121212",
        lightBg: "#F5F5F7",
        darkText: "#1D1D1F",
        lightText: "#F5F5F7",
        darkGray: "#333336",
        lightGray: "#D2D2D7",
      },
      fontFamily: {
        'sans': ["SF Pro Display", "Helvetica", "Arial", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'roboto': ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'light': "0 4px 30px rgba(0, 0, 0, 0.1)",
        'dark': "0 4px 30px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        'float': "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};