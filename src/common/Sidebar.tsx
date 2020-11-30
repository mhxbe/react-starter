import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Nav,
  Overlay,
  SidebarWrapper,
  SidebarMenuItem,
  SidebarNavigation,
} from './Sidebar.styles';

interface SidebarProps {
  onToggleSidebar: (hideSidebar?: boolean) => void;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSidebar, showSidebar }) => {
  function hideSidebar(): void {
    return onToggleSidebar(false);
  }

  const { t, i18n } = useTranslation();

  return (
    <SidebarWrapper
      data-testid="sidebar"
      aria-hidden={!showSidebar}
      id="sidebar"
      showSidebar={showSidebar}
    >
      <Nav role="navigation" showSidebar={showSidebar} lang={i18n.language}>
        <SidebarNavigation role="menu" onClick={hideSidebar}>
          <SidebarMenuItem>
            <Link to="/" data-testid="link-home" role="menuitem">
              {t('navigation.home')}
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/about" data-testid="link-about" role="menuitem">
              {t('navigation.about')}
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/foo" data-testid="link-foo" role="menuitem">
              {t('navigation.404')}
            </Link>
          </SidebarMenuItem>
        </SidebarNavigation>
        <ul aria-label="Language switcher">
          <li>
            <button
              type="button"
              data-testid="language-switch-en"
              onClick={() => i18n.changeLanguage('en')}
              aria-label={t('languages.aria.en')}
            >
              {t('languages.en')}
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="language-switch-nl"
              onClick={() => i18n.changeLanguage('nl')}
              aria-label={t('languages.aria.nl')}
            >
              {t('languages.nl')}
            </button>
          </li>
        </ul>
      </Nav>

      <Overlay
        data-testid="overlay"
        showSidebar={showSidebar}
        onClick={hideSidebar}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
