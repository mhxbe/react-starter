import * as React from 'react';
import { MenuIconWrapper } from './Header.styles';

interface MentuIconToggleProps {
  id: string;
  onToggleSidebar: (event: React.MouseEvent | React.KeyboardEvent) => void;
  showSidebar: boolean;
}

const MenuIconToggle: React.FC<MentuIconToggleProps> = ({
  id,
  onToggleSidebar,
  showSidebar,
}) => {
  return (
    <MenuIconWrapper
      data-testid="toggle-sidebar"
      aria-expanded={showSidebar}
      onClick={onToggleSidebar}
      id={id}
    >
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <polyline points="12,16 36,16" stroke="black" strokeWidth="3" />
        <polyline points="12,24 36,24" stroke="black" strokeWidth="3" />
        <polyline points="12,32 35,32" stroke="black" strokeWidth="3" />
      </svg>
    </MenuIconWrapper>
  );
};

export default MenuIconToggle;
