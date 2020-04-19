import styled from '@emotion/styled';
import { BREAKPOINT_DESKTOP } from '../constants';

interface SidebarProps {
  readonly showSidebar: boolean;
}

export const SidebarWrapper = styled.div<SidebarProps>`
  height: 100%;
  position: fixed;
  visibility: ${({ showSidebar }) => (showSidebar ? 'visible' : 'hidden')};
  width: 100%;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    position: relative;
    /* visibility: visible; */
    width: 300px;
  }
`;

export const Aside = styled.aside<SidebarProps>`
  background-color: whitesmoke;
  height: 100%;
  left: 0;
  overflow-y: auto;
  padding: 12px;
  position: absolute;
  top: 0;
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? '0px' : '-300px')}
  );
  transition: 0.25s ease-in-out;
  width: 300px;
  z-index: 2;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: block;
    position: relative;
    transform: none;
  }
`;

export const Overlay = styled.div<SidebarProps>`
  background: black;
  height: 100%;
  left: 0;
  opacity: ${({ showSidebar }) => (showSidebar ? '0.5' : '0')};
  position: absolute;
  top: 0;
  transition: 0.25s ease-in-out;
  width: 100%;
  z-index: 1;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 36px;
  height: 48px;
  line-height: 0;
  margin: 0;
  padding: 12px;
  position: absolute;
  right: 0;
  top: 0;
  width: 48px;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
