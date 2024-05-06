/** @type {import('tailwindcss').Config} */

import Palette from './src/components/util/theme/Palette'

module.exports = {
  content: [
    "./src/**/*.{htm.,js}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // colors: {},
    extend: {
      colors: {
        'bodybg-color' : {
          DEFAULT: Palette.coffeePalette['brown-yellow'][50],
        },
        'navbg-color' : {
          DEFAULT: Palette.coffeePalette['brown-yellow'][50],
        },
        'navmenubg-color' : {
          DEFAULT: Palette.coffeePalette['brown-yellow'][50],
        },
        'navtext-color' : {
          DEFAULT: Palette.coffeePalette['dark-brown'],
        },
        'navtext-hover-color' : {
          DEFAULT: Palette.coffeePalette['brown'],
        }
      },
      boxShadow: {
        'nav-shadow' : '0 10px 20px 0 rgb(27 21 22 / 0.05)',
      },
      keyframes: {
        'nav-load' : {
          '0%': {
            'opacity' : '0',
            
          },
          '100%': {
            'opacity' : '1',
          }
        }
      }
    },
  },
  plugins: [],
}
