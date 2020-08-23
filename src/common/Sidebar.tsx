import * as React from 'react';
import { Link } from 'react-router-dom';
import { BREAKPOINT_DESKTOP } from '../constants';
import {
  Aside,
  ButtonClose,
  Overlay,
  SidebarWrapper,
  SidebarMenuItem,
  SidebarNavigation,
} from './Sidebar.styles';

interface SidebarProps {
  onToggleSidebar: (isOpen: boolean) => void;
  showSidebar: boolean;
  toggleSidebarRef: React.RefObject<HTMLButtonElement>;
}

const Sidebar: React.FC<SidebarProps> = ({
  onToggleSidebar,
  showSidebar,
  toggleSidebarRef,
}) => {
  function hideSidebar(): void {
    // Only hide sidebar when its toggleable (on desktop, sidebar is always shown)
    if (document.body.clientWidth < BREAKPOINT_DESKTOP) {
      toggleSidebarRef.current?.focus();
      return onToggleSidebar(false);
    }
  }

  return (
    <SidebarWrapper
      aria-hidden={!showSidebar}
      id="sidebar"
      role="region"
      showSidebar={showSidebar}
    >
      <Aside role="navigation" showSidebar={showSidebar}>
        <SidebarNavigation role="menubar">
          <SidebarMenuItem>
            <Link to="/" onClick={hideSidebar}>
              Home
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/about" onClick={hideSidebar}>
              About
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/foo" onClick={hideSidebar}>
              Page Not Found (404)
            </Link>
          </SidebarMenuItem>
        </SidebarNavigation>
        <ButtonClose aria-label="Close" onClick={hideSidebar}>
          &times;
        </ButtonClose>
      </Aside>

      <Overlay showSidebar={showSidebar} onClick={hideSidebar} />
    </SidebarWrapper>
  );
};

export default Sidebar;
