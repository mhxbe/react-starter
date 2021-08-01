module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      normal: '#282a37',
      black: '#000000',
      white: '#ffffff',
      cyan: '#00d8ff',
      lightCyan: '#00d9fe',
      teal: '#015b6d',
      veryLightCyan: 'lightcyan',
      navy: '#060060',
      lightGray: '#d9d9d9',
      darkGray: '#333333',
    },
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      lineHeight: {
        12: '3rem',
      },
      width: {
        300: '300px',
        960: '960px',
      },
      maxWidth: {
        800: '800px',
        1100: '1100px',
        1260: '1260px',
      },
    },
  },
  plugins: [],
};
