import * as React from 'react';
import { Link } from 'react-router-dom';
import { BREAKPOINT_DESKTOP } from '../constants';
import {
  Aside,
  Overlay,
  SidebarWrapper,
  SidebarMenuItem,
  SidebarNavigation,
} from './Sidebar.styles';

interface SidebarProps {
  onToggleSidebar: (isOpen: boolean) => void;
  showSidebar: boolean;
  toggleSidebarRef: React.RefObject<HTMLDivElement>;
}

const Sidebar: React.FC<SidebarProps> = ({
  onToggleSidebar,
  showSidebar,
  toggleSidebarRef,
}) => {
  function hideSidebar(): void {
    // Only hide sidebar when its toggleable (on desktop, sidebar is always shown)
    if (window.innerWidth < BREAKPOINT_DESKTOP) {
      toggleSidebarRef.current?.focus();

      // @todo move to util
      const circles = document.querySelectorAll('svg circle');
      const circle = showSidebar ? circles[0] : circles[1];
      circle.dispatchEvent(new Event('click'));

      return onToggleSidebar(false);
    }
  }

  return (
    <SidebarWrapper
      data-testid="sidebar"
      aria-hidden={!showSidebar}
      id="sidebar"
      role="region"
      showSidebar={showSidebar}
    >
      <Aside role="navigation" showSidebar={showSidebar}>
        <SidebarNavigation role="menubar">
          <SidebarMenuItem>
            <Link to="/" onClick={hideSidebar} data-testid="link-home">
              Home
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem data-testid="link-about">
            <Link to="/about" onClick={hideSidebar}>
              About
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/foo" onClick={hideSidebar} data-testid="link-foo">
              Page Not Found (404)
            </Link>
          </SidebarMenuItem>
        </SidebarNavigation>
      </Aside>

      <Overlay
        data-testid="overlay"
        showSidebar={showSidebar}
        onClick={hideSidebar}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
