/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "very-dark": "#0F0023",
        "dark": "#3B0086",
        "darkII": "#7000FF",
        "very-light": "#F3EAFF",
        "light": "#BD8AFF",
        "lightII": "#9747FF"
      },
      boxShadow: {
        'darkShadow-sm': "3px 3px 0 #7000FF",
        'darkShadow-md': "5px 5px 0 #7000FF",
        'darkShadow-lg': "8px 8px 0 #7000FF",
        'darkShadow-xl': "10px 10px 0 #7000FF",
        'lightShadow-sm': "3px 3px 0 #9747FF",
        'lightShadow-md': "5px 5px 0 #9747FF",
        'lightShadow-lg': "8px 8px 0 #9747FF",
        'lightShadow-xl': "10px 10px 0 #9747FF",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        glowTextDark: 'glowTextDark 5s linear infinite',
        glowTextLight: 'glowTextLight 5s linear infinite'

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        glowTextDark: {
          '0%, 100%': { textShadow: ' 0px 0px 10px #3B0086', },
          '50%': { textShadow: '0px 0px 5px #3B0086, 0px 0px 20px #3B0086, 0px 0px 40px #3B0086' }
        },
        glowTextLight: {
          '0%, 100%': { textShadow: '0px 0px 10px #F3EAFF' },
          '50%': { textShadow: '0px 0px 5px #BD8AFF, 0px 0px 20px #F3EAFF, 0px 0px 40px #ffffff' }
        }
      }

    },
  },
  plugins: [],
};
