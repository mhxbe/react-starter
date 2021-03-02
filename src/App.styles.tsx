import * as React from 'react';
import { css, Global, Theme, SerializedStyles } from '@emotion/react';

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
