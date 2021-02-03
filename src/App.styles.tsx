import * as React from 'react';
import { css, Global, Theme, SerializedStyles } from '@emotion/react';
import { BREAKPOINT_DESKTOP } from './constants';

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

  /* :focus-visible polyfill: https://github.com/WICG/focus-visible */
  .js-focus-visible :focus:not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }
`;

export const ResetCss: React.FC = () => <Global styles={reset} />;
