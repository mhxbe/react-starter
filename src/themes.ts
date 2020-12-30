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

export const darkTheme: Theme = {
  color: '#d7feff',
  background: '#081d20',
  focus: '#fff36b',
  header: {
    background: '#015b6d',
    hamburger: '#d7feff',
  },
  sidebar: {
    background: '#081d20',
    border: '#015b6d',
    href: {
      link: '#d7feff',
      hover: '#00d8ff',
      focus: '#015b6d',
    },
  },
  footer: {
    background: '#081d20',
  },
  title: {
    color: '#fff36b',
    border: '#015b6d',
  },
  href: {
    link: '#30c8e4',
    visited: '#30c8e4',
    hover: '#fff36b',
  },
  button: {
    background: '#015b6d',
    border: '#00d8ff',
    color: '#d7feff',
  },
  skipLink: {
    background: '#081d20',
    border: '#ffffff',
    color: '#ffffff',
  },
};
