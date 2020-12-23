import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  color: '#282a37',
  background: 'white',
  focus: '#015b6d',
  header: {
    background: '#00d8ff',
    hamburger: '#282a37',
  },
  sidebar: {
    background: 'white',
    border: '#d9d9d9',
    href: {
      link: '#015b6d',
      hover: '#060060',
      focus: 'lightcyan',
    },
  },
  footer: {
    background: 'white',
  },
  title: {
    color: '#282a37',
    border: '#00d8ff',
  },
  href: {
    link: '#015b6d',
    visited: '#015b6d',
    hover: '#060060',
  },
  button: {
    background: '#00d9fe',
    border: '#d9d9d9',
    color: '#272b37',
  },
  skipLink: {
    background: '#333333',
    border: '#ffffff',
    color: '#ffffff',
  },
};
