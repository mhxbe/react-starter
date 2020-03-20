import * as React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';

export const Main = styled.main`
  background-color: midnightblue;
  height: 100%;
`;

export const Title = styled.h1`
  color: springgreen;
`;

const reset = css`
  html {
    height: 100%;
    font-family: 'Courier New', Courier, monospace;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    height: inherit;
    margin: 0rem;
  }
  #root {
    height: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  /* Opiniated selection from https://csstools.github.io/sanitize.css/11.0.0/sanitize.css */
  * {
    box-sizing: border-box;
  }
  ::before,
  ::after {
    box-sizing: border-box;
  }
  ul {
    margin: 0;
  }
  main {
    display: block;
  }
  a {
    background-color: transparent;
  }
  button {
    overflow: visible;
    text-transform: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  input {
    overflow: visible;
  }
`;

export const ResetCss: React.FC = () => <Global styles={reset} />;
