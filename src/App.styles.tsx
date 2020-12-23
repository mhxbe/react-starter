import * as React from 'react';
import { css, Global, Theme, SerializedStyles } from '@emotion/react';
import { BREAKPOINT_DESKTOP } from './constants';

export const title = (theme: Theme): SerializedStyles => css`
  color: ${theme.title.color};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1;
  border-bottom: 2px solid ${theme.title.border};
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 440px) {
    font-size: 2rem;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

export const subTitle = (theme: Theme): SerializedStyles => css`
  color: ${theme.title.color};
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 0.75rem;

  @media (min-width: 440px) {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const wrapper = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.background};
  color: ${theme.color};
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    margin: 0 auto;
    max-width: ${BREAKPOINT_DESKTOP}px;
  }
`;

export const mainWrapper = css`
  margin: 0 auto;
  padding: 1rem;
  z-index: 1;
  width: 100%;
  flex: 1;

  @media (min-width: 440px) {
    padding: 24px;
    max-width: 800px;
  }
  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    width: 960px;
  }
`;

export const main = css`
  &:focus-visible::before {
    content: '';
    display: block;
    height: 72px;
    margin-top: -72px;
  }
`;

export const paragraph = css`
  line-height: 1.5;
  margin: 0 0 1.25rem 0;

  @media (min-width: 440px) {
    font-size: 1.25rem;
    line-height: 1.75;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const link = (theme: Theme): SerializedStyles => css`
  display: inline-block;
  &:link {
    color: ${theme.href.link};
  }
  &:visited {
    color: ${theme.href.visited};
  }
  &:hover {
    color: ${theme.href.hover};
  }
`;

export const list = css`
  padding: 0;
  font-size: 1rem;
  @media (min-width: 440px) {
    font-size: 1.25rem;
  }
  li {
    line-height: 3rem;
  }
`;

export const button = (theme: Theme): SerializedStyles => css`
  -webkit-appearance: none;
  -webkit-border-radius: none;
  background-color: ${theme.button.background};
  border-radius: 0;
  border: 1px solid ${theme.button.border};
  color: ${theme.button.color};
  font-size: 1rem;
  height: 48px;
  margin: 0 0 12px 0;
  padding: 0 12px;

  &.full-width {
    width: 100%;
  }
`;
export const backButton = (theme: Theme): SerializedStyles => css`
  background: transparent;
  border: 0;
  color: ${theme.href.link};
  cursor: pointer;
  font-size: inherit;
  margin: 0;
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: ${theme.href.hover};
  }
`;

export const footer = (theme: Theme): SerializedStyles => css`
  align-items: center;
  background-color: ${theme.footer.background};
  color: ${theme.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;

  .wrapper {
    align-items: center;
    display: inherit;
    flex-direction: column;
    max-width: 1100px;
    padding: 12px 24px;
    width: 100%;

    @media (min-width: 960px) {
      align-items: unset;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const reset = (theme: Theme): SerializedStyles => css`
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
    background-color: ${theme.header
      .background}; /* iOS topbar background color when black-translucent */
    height: 100%;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background: ${theme.background};
    display: flex;
    flex-direction: column;
    margin: 0rem;
    min-height: 100%;
    overflow-y: auto;
  }
  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  /* :focus-visible polyfill: https://github.com/WICG/focus-visible */
  .js-focus-visible :focus:not(.focus-visible) {
    box-shadow: none;
    outline: none;
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
    box-shadow: 0 0 0 2px ${theme.focus};
    outline: 0;
    border-radius: 0px;

    &:focus:not(:focus-visible) {
      box-shadow: none;
      outline: none;
    }
  }
  ul {
    margin: 0;
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
