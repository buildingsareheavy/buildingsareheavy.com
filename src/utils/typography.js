import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Karla',
      styles: ['400'],
    },
    {
      name: 'Big Caslon',
      styles: ['400'],
    },
    {
      name: 'Playfair Display',
      styles: ['900i'],
    },
    {
      name: 'Markazi Text',
      styles: ['700'],
    },
  ],
  headerFontFamily: ['Markazi Text', 'Playfair Display', 'sans-serif'],
  bodyFontFamily: ['Karla', 'serif'],
  overrideThemeStyles: () => ({
    h2: {
      fontFamily: ['Big Caslon', 'serif'].join(','),
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
