import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Overlay,
  SidebarWrapper,
  SidebarMenuItem,
  List,
  SidebarHeader,
  SidebarContent,
  SidebarPadding,
  LanguageButton,
} from './Sidebar.styles';

interface SidebarProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSidebar, showSidebar }) => {
  function hideSidebar(): void {
    return onToggleSidebar();
  }

  const { t, i18n } = useTranslation();

  return (
    <SidebarWrapper
      data-testid="sidebar"
      aria-hidden={!showSidebar}
      id="sidebar"
      showSidebar={showSidebar}
    >
      <SidebarContent showSidebar={showSidebar}>
        <nav role="navigation">
          <SidebarPadding>
            <SidebarHeader id="sidebar-header">
              {t('sidebar.navigation')}
            </SidebarHeader>
          </SidebarPadding>
          <List
            role="menu"
            onClick={hideSidebar}
            aria-labelledby="sidebar-header"
          >
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
          </List>
        </nav>
        <aside>
          <SidebarPadding>
            <SidebarHeader tabIndex={-1} id="sidebar-language-switcher">
              {t('sidebar.switch_language')}
            </SidebarHeader>
            <List aria-labelledby="sidebar-language-switcher">
              <li>
                <LanguageButton
                  type="button"
                  data-testid="language-switch-en"
                  onClick={() => i18n.changeLanguage('en')}
                >
                  <span aria-label={t('languages.aria.en')}>
                    {t('languages.en')}
                  </span>
                </LanguageButton>
              </li>
              <li>
                <LanguageButton
                  type="button"
                  data-testid="language-switch-nl"
                  onClick={() => i18n.changeLanguage('nl')}
                >
                  <span aria-label={t('languages.aria.nl')}>
                    {t('languages.nl')}
                  </span>
                </LanguageButton>
              </li>
            </List>
          </SidebarPadding>
        </aside>
      </SidebarContent>
      <Overlay
        data-testid="overlay"
        showSidebar={showSidebar}
        onClick={hideSidebar}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
