import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Aside,
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
      <Aside role="navigation" showSidebar={showSidebar}>
        <SidebarNavigation role="menubar" onClick={hideSidebar}>
          <SidebarMenuItem>
            <Link to="/" data-testid="link-home">
              {t('navigation.home')}
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/about" data-testid="link-about">
              {t('navigation.about')}
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/foo" data-testid="link-foo">
              {t('navigation.404')}
            </Link>
          </SidebarMenuItem>
        </SidebarNavigation>
        <ul>
          <li>
            <button
              type="button"
              data-testid="language-switch-en"
              onClick={() => i18n.changeLanguage('en')}
            >
              {t('languages.en')}
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="language-switch-nl"
              onClick={() => i18n.changeLanguage('nl')}
            >
              {t('languages.nl')}
            </button>
          </li>
        </ul>
      </Aside>

      <Overlay
        data-testid="overlay"
        showSidebar={showSidebar}
        onClick={hideSidebar}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
