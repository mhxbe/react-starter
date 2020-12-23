import { css, SerializedStyles, Theme } from '@emotion/react';
import { BREAKPOINT_DESKTOP, HEADER_HEIGHT } from '../constants';

export const sidebarWrapper = css`
  height: calc(100% - ${HEADER_HEIGHT}px);
  position: fixed;
  visibility: visible;
  width: 100%;
  z-index: 2;

  &[aria-hidden='true'] {
    visibility: hidden;
  }

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    height: auto;
    left: 0;
    position: sticky;
    top: ${HEADER_HEIGHT}px;
    width: 300px;
  }
`;

export const sidebarContent = (
  theme: Theme,
  showSidebar: boolean
): SerializedStyles => css`
  background-color: ${theme.sidebar.background};
  height: 100%;
  overflow-y: auto;
  position: relative;
  transform: translateX(${showSidebar ? '0px' : '-300px'});
  transition: 0.25s ease-in-out;
  width: 300px;
  z-index: 1;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: block;
    padding: 12px;
    transform: translateX(0px);
  }
`;

export const sidebarHeader = (theme: Theme): SerializedStyles => css`
  color: ${theme.title.color};
  padding: 12px 0;
`;

export const overlay = (showSidebar: boolean): SerializedStyles => css`
  background: black;
  height: 100%;
  left: 0;
  opacity: ${showSidebar ? '0.5' : '0'};
  position: absolute;
  top: 0;
  transition: 0.25s ease-in-out;
  width: 100%;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }
`;

export const sidebarMenuItem = (theme: Theme): SerializedStyles => css`
  align-items: center;
  border-bottom: 1px solid ${theme.sidebar.border};
  display: flex;
  height: 48px;

  &:first-of-type {
    border-top: 1px solid ${theme.sidebar.border};
  }

  a {
    display: block;
    height: 100%;
    line-height: 48px;
    padding: 0 12px;
    text-decoration: none;
    width: 100%;

    &:link,
    &:visited {
      color: ${theme.sidebar.href.link};
    }
    &:hover {
      color: ${theme.sidebar.href.hover};
    }
    &:focus {
      background-color: ${theme.sidebar.href.focus};
    }
  }
`;
