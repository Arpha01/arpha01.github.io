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
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
    backgroundColor: ({ after }) => after(['disabled'])
  },
  plugins: [],
}
