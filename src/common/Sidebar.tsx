import * as React from 'react';
import { GoX } from 'react-icons/go';
import { Aside, ButtonClose, Overlay } from './Sidebar.styles';

interface SidebarProps {
  open: boolean;
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
  console.log('Sidebar open?', open);

  function hideSidebar(): void {
    return onToggle(false);
  }

  return (
    <>
      <Aside open={open}>
        <h2>Wow sidebar</h2>
        <p>So cool</p>
        <p>Many items</p>
        <p>Such animation</p>
        <p>Very height</p>
        <ButtonClose onClick={hideSidebar}>
          <GoX />
        </ButtonClose>
      </Aside>
      <Overlay show={open} onClick={hideSidebar} />
    </>
  );
};

export default Sidebar;
