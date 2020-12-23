import { css, SerializedStyles, Theme } from '@emotion/react';
import { BREAKPOINT_DESKTOP, HEADER_HEIGHT } from '../constants';

export const header = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.header.background};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: ${HEADER_HEIGHT}px;
  justify-content: center;
  left: 0;
  min-height: ${HEADER_HEIGHT}px;
  position: sticky;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 3;
`;

export const headerTitle = (theme: Theme): SerializedStyles => css`
  color: ${theme.color};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1;

  @media (min-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const menuIconWrapper = (theme: Theme): SerializedStyles => css`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 44px;
  left: 4px;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 44px;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.focus};
    outline: 0;
    border-radius: 0px;
  }

  svg {
    height: 44px;
    width: 44px;

    > polyline {
      stroke: ${theme.header.hamburger};
    }
  }
`;

export const skipLink = (theme: Theme): SerializedStyles => css`
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:focus {
    align-items: center;
    background: ${theme.skipLink.background};
    border: 3px solid ${theme.skipLink.border};
    color: ${theme.skipLink.color};
    display: flex;
    font-size: inherit;
    height: 44px;
    left: 2px;
    max-height: 48px;
    overflow: auto;
    padding: 0 6px;
    text-decoration: none;
    top: 2px;
    width: auto;
    z-index: 4;
  }
`;
