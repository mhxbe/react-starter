/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { StyledHeader, HeaderTitle, skipLink } from './Header.styles';
import MenuIconToggle from './MenuIconToggle';

interface HeaderProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, showSidebar }) => {
  const { t } = useTranslation();
  return (
    <StyledHeader data-testid="header">
      <a href="#main-content" css={skipLink}>
        {t('navigation.skipLinks.main')}
      </a>
      <a href="#sidebar-language-switcher" css={skipLink}>
        {t('navigation.skipLinks.language')}
      </a>
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
