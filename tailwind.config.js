module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-100': '-100',
      }
    },
    screens: {
      'xs': {'min': '100px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1439px'},
      'xmobile' : {'max': '600px'},
      'mobile' : {'max': '900px'},
      'desktop' : {'min': '901px'},
      'smallscreens' : {'max': '1279px'},
      'largescreens': {'min': '1280px'},
      'xxl': {'min': '1440px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    fontFamily: {
      'main' : 'Kiona',
      'bold' : 'KionaBold'
    },
    backgroundPosition: {
      bottom: 'bottom',
     'bottom-4': 'center bottom 1rem',
      center: 'center',
      set: 'center bottom -4rem',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
     'top-4': 'center top 1rem',
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'motion-reduce', 'motion-safe', 'group-hover'],
      height: ['hover', 'focus'],
      ringWidth: ['hover', 'active', 'focus'],
      visibility: ['hover', 'focus', 'group-hover'],
      objectPosition: ['hover', 'focus', 'responsive'],
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
