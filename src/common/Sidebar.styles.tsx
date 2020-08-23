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
    width: 300px;
  }
`;

export const Aside = styled.aside<SidebarProps>`
  background-color: white;
  height: 100%;
  overflow-y: auto;
  padding: 12px;
  position: relative;
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? '0px' : '-300px')}
  );
  transition: 0.25s ease-in-out;
  width: 300px;
  z-index: 1;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: block;
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

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }
`;

export const SidebarNavigation = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SidebarMenuItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  height: 48px;

  &:last-child {
    border-bottom: 0;
  }

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    height: 36px;
  }

  a {
    display: block;
    line-height: 48px;
    height: 100%;
    width: 100%;
    text-decoration: none;

    &:link,
    &:visited {
      color: #015b6d;
    }
    &:hover {
      color: #060060;
    }

    @media (min-width: ${BREAKPOINT_DESKTOP}px) {
      line-height: 36px;
    }
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 2rem;
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
