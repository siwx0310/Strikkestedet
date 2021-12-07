module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      background:{
       DEFAULT: '#F8F8F8'
      },
      gray:{
        header: '#E3E3E3',
        footer: '#F2F2F2',
        input: '#DEDEDE'
      } ,
      black: {
        DEFAULT: '#000000',
        10: 'rgba(0,0,0,.1)',
        20: 'rgba(0,0,0,.2)',
        60: 'rgba(0,0,0,.6)',
        70: 'rgba(0,0,0,.7)',
      },
      white: {
        DEFAULT: '#FFFFFF',
        10: 'rgba(255,255,255,.1)',
        20: 'rgba(255,255,255,.2)',
        60: 'rgba(255,255,255,.6)',
        70: 'rgba(255,255,255,.7)',
      },
    } ,
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ["Bodoni Moda", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
