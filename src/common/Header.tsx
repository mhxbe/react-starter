import * as React from 'react';
import { StyledHeader, HeaderTitle } from './Header.styles';
import MenuIconToggle from './MenuIconToggle';

interface HeaderProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
  toggleSidebarRef: React.RefObject<HTMLDivElement>;
}
const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  toggleSidebarRef,
  showSidebar,
}) => {
  return (
    <StyledHeader>
      <MenuIconToggle
        id="toggle-sidebar"
        aria-label={showSidebar ? 'Show menu' : 'Close menu'}
        aria-controls="sidebar"
        showSidebar={showSidebar}
        onToggleSidebar={onToggleSidebar}
        ref={toggleSidebarRef}
      />
      <HeaderTitle>mhxbe/react-starter</HeaderTitle>
    </StyledHeader>
  );
};

export default Header;
