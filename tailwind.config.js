module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#3E3F3F',
        'accent-2': '#7F7C65',
        'accent-3': '#FFFCF9',
        'accent-4': '#974736',
        'accent-5': '#F5D39A',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
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
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        '32': '8rem',
      }
    },
  },
  plugins: [
    ({addComponents, theme }) => {
      addComponents({
        '.container': {
          position: 'relative',
          top: '0',
          left: '0',
          width: '100%',
          // height: '84vh',
          // maxWidth: '1268px',
          maxHeight: '674px',

          // Breakpoints
          // "@screen sm": {
          //   maxWidth: theme("screens.sm"),
          // },
          '@screen sm': {
            margin: '0 auto',
            width: '100%',
          },
          // "@screen md": {
          //   // margin: '8vh 6vw',
          //   // margin: '0 auto',
          //   // padding: '0 15px 0 100px',
          //   // top: '20px',
          //   // left: 0,
          //   marginLeft: 'auto',
          //   marginRight: 'auto',
          //   height: 'auto',
          //   transform: 'none',
          // },
          "@screen xl": {
            maxWidth: '1268px',
            maxHeight: '674px',
            margin: '5vh 3vw',
            height: '90vh'
          },
        }
      })
    }
  ]
}
