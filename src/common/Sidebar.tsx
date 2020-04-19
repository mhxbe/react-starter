import * as React from 'react';
import { Aside, ButtonClose, Overlay, SidebarWrapper } from './Sidebar.styles';

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
    toggleSidebarRef.current?.focus();
    return onToggleSidebar(false);
  }

  return (
    <SidebarWrapper
      aria-hidden={!showSidebar}
      id="sidebar"
      role="region"
      showSidebar={showSidebar}
    >
      <Aside role="navigation" showSidebar={showSidebar}>
        <h2>Sidebar wow</h2>
        <ul role="menubar">
          <li>
            <a href="#">So cool</a>
          </li>
          <li>
            <a href="#">Many items</a>
          </li>
          <li>
            <a href="#">Such animation</a>
          </li>
          <li>
            <a href="#">Very height</a>
          </li>
        </ul>
        <ButtonClose aria-label="Close" onClick={hideSidebar}>
          &times;
        </ButtonClose>
      </Aside>

      <Overlay showSidebar={showSidebar} onClick={hideSidebar} />
    </SidebarWrapper>
  );
};

export default Sidebar;
