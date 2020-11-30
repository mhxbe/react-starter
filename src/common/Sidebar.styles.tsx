import styled from '@emotion/styled';
import { BREAKPOINT_DESKTOP, HEADER_HEIGHT } from '../constants';

interface SidebarProps {
  readonly showSidebar: boolean;
}

export const SidebarWrapper = styled.div<SidebarProps>`
  height: calc(100% - ${HEADER_HEIGHT}px);
  position: fixed;
  visibility: ${({ showSidebar }) => (showSidebar ? 'visible' : 'hidden')};
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

export const SidebarContent = styled.div<SidebarProps>`
  background-color: white;
  height: 100%;
  overflow-y: auto;
  position: relative;
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? '0px' : '-300px')}
  );
  transition: 0.25s ease-in-out;
  width: 300px;
  z-index: 1;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: block;
    padding: 12px;
    transform: translateX(0px);
  }
`;

export const SidebarHeader = styled.h3`
  padding: 12px 0;
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

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SidebarPadding = styled.div`
  padding: 0 12px;
`;

export const SidebarMenuItem = styled.li`
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

export const LanguageButton = styled.button`
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
