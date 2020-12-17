/** @jsx jsx */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { list } from '../App.styles';
import {
  overlay,
  sidebarWrapper,
  sidebarMenuItem,
  sidebarHeader,
  sidebarContent,
  languageButton,
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
    <div
      data-testid="sidebar"
      aria-hidden={!showSidebar}
      id="sidebar"
      css={sidebarWrapper(showSidebar)}
    >
      <div css={sidebarContent(showSidebar)}>
        <nav role="navigation">
          <div
            css={css`
              padding: 0 12px;
            `}
          >
            <h3 id="sidebar-header" css={sidebarHeader}>
              {t('sidebar.navigation')}
            </h3>
          </div>
          <ul
            role="menu"
            onClick={hideSidebar}
            aria-labelledby="sidebar-header"
            css={css`
              ${list};
              list-style-type: none;
              @media (min-width: 440px) {
                font-size: 1rem;
              }
            `}
          >
            <li css={sidebarMenuItem}>
              <Link to="/" data-testid="link-home" role="menuitem">
                {t('navigation.home')}
              </Link>
            </li>
            <li css={sidebarMenuItem}>
              <Link to="/about" data-testid="link-about" role="menuitem">
                {t('navigation.about')}
              </Link>
            </li>
            <li css={sidebarMenuItem}>
              <Link to="/foo" data-testid="link-foo" role="menuitem">
                {t('navigation.404')}
              </Link>
            </li>
          </ul>
        </nav>
        <aside>
          <div
            css={css`
              padding: 0 12px;
            `}
          >
            <h3
              tabIndex={-1}
              id="sidebar-language-switcher"
              css={sidebarHeader}
            >
              {t('sidebar.switch_language')}
            </h3>
            <ul
              aria-labelledby="sidebar-language-switcher"
              css={css`
                ${list};
                list-style-type: none;
              `}
            >
              <li>
                <button
                  type="button"
                  data-testid="language-switch-en"
                  onClick={() => i18n.changeLanguage('en')}
                  css={languageButton}
                >
                  <span aria-label={t('languages.aria.en')}>
                    {t('languages.en')}
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="language-switch-nl"
                  onClick={() => i18n.changeLanguage('nl')}
                  css={languageButton}
                >
                  <span aria-label={t('languages.aria.nl')}>
                    {t('languages.nl')}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div
        data-testid="overlay"
        onClick={hideSidebar}
        css={overlay(showSidebar)}
      />
    </div>
  );
};

export default Sidebar;
