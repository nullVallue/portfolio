/** @type {import('tailwindcss').Config} */

import Palette from './src/components/theme/Palette'

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
          DEFAULT: Palette.monoBluePalette['black'],
        },
        'navbg-color' : {
          DEFAULT: Palette.monoBluePalette['black'],
        },
        'navtext-color' : {
          DEFAULT: Palette.monoBluePalette['white'],
        },
      },
      boxShadow: {
        'nav-shadow' : '0 10px 20px 0 rgb(149 202 227 / 0.05)',
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
