import * as React from 'react';
import { ButtonToggleSidebar, StyledHeader, Title } from './Header.styles';

interface HeaderProps {
  onToggleSidebar: () => void;
}
const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <StyledHeader>
      <ButtonToggleSidebar onClick={onToggleSidebar}>
        &#9776;
      </ButtonToggleSidebar>
      <Title>mhxbe/react-starter</Title>
    </StyledHeader>
  );
};

export default Header;
