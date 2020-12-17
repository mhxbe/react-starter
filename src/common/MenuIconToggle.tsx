/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import { menuIconWrapper } from './Header.styles';

interface MentuIconToggleProps {
  id: string;
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const MenuIconToggle: React.FC<MentuIconToggleProps> = ({
  id,
  onToggleSidebar,
  showSidebar,
}) => {
  return (
    <button
      data-testid="toggle-sidebar"
      aria-expanded={showSidebar}
      aria-label={`${showSidebar ? 'Hide' : 'Show'} sidebar navigation`}
      onClick={onToggleSidebar}
      id={id}
      css={menuIconWrapper}
    >
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <polyline points="12,16 36,16" stroke="black" strokeWidth="3" />
        <polyline points="12,24 36,24" stroke="black" strokeWidth="3" />
        <polyline points="12,32 35,32" stroke="black" strokeWidth="3" />
      </svg>
    </button>
  );
};

export default MenuIconToggle;
