import { css, SerializedStyles } from '@emotion/react';
import { BREAKPOINT_DESKTOP, HEADER_HEIGHT } from '../constants';

export const sidebarWrapper = (showSidebar: boolean): SerializedStyles => css`
  height: calc(100% - ${HEADER_HEIGHT}px);
  position: fixed;
  visibility: ${showSidebar ? 'visible' : 'hidden'};
  width: 100%;
  z-index: 2;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    height: auto;
    left: 0;
    position: sticky;
    top: ${HEADER_HEIGHT}px;
    visibility: visible;
    width: 300px;
  }
`;

export const sidebarContent = (showSidebar: boolean): SerializedStyles => css`
  background-color: white;
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

export const sidebarHeader = css`
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

export const sidebarMenuItem = css`
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  height: 48px;

  &:first-of-type {
    border-top: 1px solid #d9d9d9;
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
      color: #015b6d;
    }
    &:hover {
      color: #060060;
    }
    &:focus {
      background-color: lightcyan;
    }
  }
`;

export const languageButton = css`
  -webkit-appearance: none;
  -webkit-border-radius: none;
  background-color: #00d9fe;
  border-radius: 0;
  border: 1px solid #d9d9d9;
  color: #272b37;
  font-size: 1rem;
  height: 48px;
  margin: 0 0 12px 0;
  padding: 0;
  width: 100%;
`;
