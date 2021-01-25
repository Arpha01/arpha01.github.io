module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/app/**/*.component.html'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      sf: ['-apple-system', 'system-ui', 'BlinkMacSystemFont'],
      opensans: ['Open Sans', 'sans-serif'],
      kumbh: ['Kumbh Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
