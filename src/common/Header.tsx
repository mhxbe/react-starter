import * as React from 'react';
import { useTranslation } from 'react-i18next';
import SkipLink from '../common/SkipLink';
import MenuIconToggle from './MenuIconToggle';

interface HeaderProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, showSidebar }) => {
  const { t } = useTranslation();
  return (
    <header
      data-testid="header"
      className="bg-cyan flex flex-col h-12 min-h-12 justify-center sticky text-center shadow-sm top-0 z-30"
    >
      <SkipLink href="#main-content" text={t('navigation.skipLinks.main')} />
      <SkipLink
        href="#sidebar-language-switcher"
        text={t('navigation.skipLinks.language')}
      />
      <MenuIconToggle
        id="toggle-sidebar"
        aria-label={showSidebar ? 'Show menu' : 'Close menu'}
        aria-controls="sidebar"
        showSidebar={showSidebar}
        onToggleSidebar={onToggleSidebar}
      />
      <span className="text-normal text-xl sm:text-2xl font-bold leading-none">
        mhxbe/react-starter
      </span>
    </header>
  );
};

export default Header;
