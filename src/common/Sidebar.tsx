import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Aside,
  Overlay,
  SidebarWrapper,
  SidebarMenuItem,
  SidebarNavigation,
} from './Sidebar.styles';

interface SidebarProps {
  onToggleSidebar: (hideSidebar?: boolean) => void;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSidebar, showSidebar }) => {
  function hideSidebar(): void {
    return onToggleSidebar(false);
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
        <SidebarNavigation role="menubar" onClick={hideSidebar}>
          <SidebarMenuItem>
            <Link to="/" data-testid="link-home">
              Home
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem data-testid="link-about">
            <Link to="/about">About</Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/foo" data-testid="link-foo">
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
