import * as React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';

export const Header = styled.header`
  background-color: #00d8ff;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 56px;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const Main = styled.main`
  background-color: white;
  flex: 1;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.p`
  color: black;
  font-size: 14px;
  line-height: 1.75;
  margin: 0 auto;
  margin-bottom: 6px;
  max-width: 960px;
  padding: 6px 12px 12px;

  @media (min-width: 340px) {
    padding: 12px 18px 18px;
    font-size: 14px;
  }
  @media (min-width: 400px) {
    padding: 18px 24px 24px;
    font-size: 16px;
  }
`;

export const CopyRight = styled.div`
  align-self: flex-end;
  color: black;
  flex-basis: 100%;
  font-size: 12px;
  padding: 24px;
  text-align: center;
`;

const reset = css`
  html {
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
    display: flex;
    flex-direction: column;
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
