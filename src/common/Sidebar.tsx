import * as React from 'react';
import { GoX } from 'react-icons/go';
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
        <h2>Wow sidebar</h2>
        <p>So cool</p>
        <p>Many items</p>
        <p>Such animation</p>
        <p>Very height</p>
        {showCloseButton && (
          <ButtonClose onClick={hideSidebar}>
            <GoX />
          </ButtonClose>
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
