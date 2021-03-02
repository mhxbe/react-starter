/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { header, headerTitle, skipLink } from './Header.styles';
import MenuIconToggle from './MenuIconToggle';

interface HeaderProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, showSidebar }) => {
  const { t } = useTranslation();
  return (
    <header data-testid="header" css={header} className="z-30">
      <a href="#main-content" css={skipLink} className="focus:z-40">
        {t('navigation.skipLinks.main')}
      </a>
      <a
        href="#sidebar-language-switcher"
        css={skipLink}
        className="focus:z-40"
      >
        {t('navigation.skipLinks.language')}
      </a>
      <MenuIconToggle
        id="toggle-sidebar"
        aria-label={showSidebar ? 'Show menu' : 'Close menu'}
        aria-controls="sidebar"
        showSidebar={showSidebar}
        onToggleSidebar={onToggleSidebar}
      />
      <span css={headerTitle}>mhxbe/react-starter</span>
    </header>
  );
};

export default Header;
