import * as React from 'react';
import { StyledHeader, HeaderTitle } from './Header.styles';
import MenuIconToggle from './MenuIconToggle';

interface HeaderProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}
const Header: React.FC<HeaderProps> = ({ onToggleSidebar, showSidebar }) => {
  return (
    <StyledHeader data-testid="header">
      <MenuIconToggle
        id="toggle-sidebar"
        aria-label={showSidebar ? 'Show menu' : 'Close menu'}
        aria-controls="sidebar"
        showSidebar={showSidebar}
        onToggleSidebar={onToggleSidebar}
      />
      <HeaderTitle>mhxbe/react-starter</HeaderTitle>
    </StyledHeader>
  );
};

export default Header;
