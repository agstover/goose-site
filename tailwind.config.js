const autoprefixer = require('autoprefixer')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('public/kate.jpg')",
       }),
      colors: {
        'accent-1': '#1F1F1F',
        'accent-2': '#414141',
        'accent-3': '#666b59',
        'accent-4': '#d4af37',
        'accent-5': '#78a14f',
        'accent-7': '#333'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      maxWidth: {
        'left-pane': 'calc(50% - 30px);',
        'right-pane': 'calc(50% + 30px)',
      },
      boxShadow : {
        'right': 'inset -7px 0 9px -7px rgba(0,0,0,0.7)',
        'left': 'inset 7px 0 9px -7px rgba(0,0,0,0.7)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    ({addComponents, theme }) => {
      addComponents({
        '.container': {
          position: 'relative',
          paddingRight: '15px',
          paddingLeft: '15px',
          margin: '0 auto',
          height: '100%',
          width: '100%',
          '@screen sm': {
            margin: '0 auto',
            maxWidth: '1140px'
          }
        }
      })
    }
  ]
}
