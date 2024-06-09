/** @type {import('tailwindcss').Config} */

import Palette from './src/components/util/theme/Palette'

module.exports = {
  content: [
    "./src/**/*.{htm.,js}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {

        /**========================================================================
         *                           home page
         *========================================================================**/

          /**------------------------------------------------------------------------
           *                           body
           *------------------------------------------------------------------------**/
          'bodybg-color' : {
            DEFAULT: Palette.monoBluePalette['white'],
          },
          'bodybg-gradientstop-color' : {
            DEFAULT: Palette.monoBluePalette['white'],
          },

          /**------------------------------------------------------------------------
           *                           nav
           *------------------------------------------------------------------------**/
          'navbg-color' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'navmenubg-color' : {
            DEFAULT: Palette.monoBluePalette['white'],
          },
          'navtext-color' : {
            DEFAULT: Palette.monoBluePalette['black'],
          },
          'navtext-hover-color' : {
            DEFAULT: Palette.monoBluePalette['white'],
          },
          'navtextbg-hover-color' : {
            DEFAULT: Palette.monoBluePalette['accent-blue'][300],
          },

          /**------------------------------------------------------------------------
           *                           hero
           *------------------------------------------------------------------------**/
          'home-name-color' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'home-namebg-color' : {
            DEFAULT: Palette.monoBluePalette['accent-blue'][400],
          },
          'home-hero-right-color' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'home-rolesbg-color' : {
            DEFAULT: Palette.monoBluePalette['dark-blue'][400],
          },
          'home-link-bgcolor' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'home-link-color' : {
            DEFAULT: Palette.monoBluePalette['black'],
          },
          'home-link-hover-bgcolor' : {
            DEFAULT: Palette.monoBluePalette['accent-blue'][400],
          },
          'home-link-hover-color' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },

          /**------------------------------------------------------------------------
           *                           featured work
           *------------------------------------------------------------------------**/
          'home-featured-bgcolor' : {
            DEFAULT: Palette.monoBluePalette['dark-blue'][800],
          },
          'home-featured-title' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },

          /**------------------------------------------------------------------------
           *                           about me
           *------------------------------------------------------------------------**/
          'home-aboutme-bgcolor' : {
            DEFAULT: Palette.monoBluePalette['dark-blue'][800],
          },
          'home-aboutme-title' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'home-aboutme-p' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'home-aboutme-framebg' : {
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },

          /**------------------------------------------------------------------------
           *                           Skills
           *------------------------------------------------------------------------**/
          'home-skills-bgcolor' : {
            // DEFAULT: Palette.monoBluePalette['dark-blue'][800],
            DEFAULT: Palette.monoBluePalette['pure-white'],
          },
          'home-skills-title' : {
            // DEFAULT: Palette.monoBluePalette['pure-white'],
            DEFAULT: Palette.monoBluePalette['black'],
          },
        
        /*============================ END OF HOME ============================*/




        /**========================================================================
         *                           components
         *========================================================================**/
          
          /**------------------------------------------------------------------------
           *                           card
           *------------------------------------------------------------------------**/
          'card-border' : {
            DEFAULT: Palette.monoBluePalette['black'],
          },
        

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
  plugins: [
  ],
}
