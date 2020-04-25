import * as React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { BREAKPOINT_DESKTOP } from './constants';

export const Main = styled.main`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    margin: 0 auto;
    max-width: ${BREAKPOINT_DESKTOP}px;
  }
`;

export const Content = styled.section`
  margin: 0 auto;
  padding: 12px;

  @media (min-width: 440px) {
    padding: 24px;
    max-width: 800px;
  }
  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    max-width: 960px;
  }
`;

export const Paragraph = styled.p`
  color: black;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 18px 0;

  @media (min-width: 440px) {
    font-size: 18px;
    line-height: 1.75;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const reset = css`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(./fonts/OpenSans-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
      url(./fonts/OpenSans-ExtraBold.woff2) format('woff2');
  }

  html {
    background-color: #00d8ff; /* iOS topbar background color */
    height: 100%;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    height: inherit;
    margin: 0rem;
  }
  #root {
    background-color: white;
    display: flex;
    flex-direction: column;
    min-height: 100%;
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
  *:focus {
    box-shadow: 0 0 0 2px #015b6d;
    outline: 0;
    border-radius: 0px;
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
