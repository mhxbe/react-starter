import * as React from 'react';
import { Aside, ButtonClose, Overlay } from './Sidebar.styles';

interface SidebarProps {
  onToggleSidebar: (isOpen: boolean) => void;
  showCloseButton?: boolean;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  onToggleSidebar,
  showCloseButton,
  showSidebar,
}) => {
  function hideSidebar(): void {
    return onToggleSidebar(false);
  }

  return (
    <>
      <Aside showSidebar={showSidebar}>
        <h2>Sidebar wow</h2>
        <p>So cool</p>
        <p>Many items</p>
        <p>Such animation</p>
        <p>Very height</p>
        {showCloseButton && (
          <ButtonClose onClick={hideSidebar}>&times;</ButtonClose>
        )}
      </Aside>
      <Overlay showSidebar={showSidebar} onClick={hideSidebar} />
    </>
  );
};

Sidebar.defaultProps = {
  showCloseButton: false,
};

export default Sidebar;
