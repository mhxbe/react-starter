import * as React from 'react';
import { ButtonToggleSidebar, StyledHeader, Title } from './Header.styles';

interface HeaderProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
  toggleSidebarRef: React.RefObject<HTMLButtonElement>;
}
const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  toggleSidebarRef,
  showSidebar,
}) => {
  return (
    <StyledHeader>
      <ButtonToggleSidebar
        id="toggle-sidebar"
        aria-controls="sidebar"
        aria-expanded={showSidebar}
        onClick={onToggleSidebar}
        ref={toggleSidebarRef}
      >
        &#9776;
      </ButtonToggleSidebar>
      <Title>mhxbe/react-starter</Title>
    </StyledHeader>
  );
};

export default Header;
