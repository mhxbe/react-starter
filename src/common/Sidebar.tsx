import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface SidebarProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSidebar, showSidebar }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      aria-hidden={!showSidebar}
      id="sidebar"
      className={`visible fixed z-20 xl:z-0 w-full xl:h-auto xl:left-0 xl:sticky xl:w-300 ${
        showSidebar ? 'visible' : 'invisible'
      }`}
      style={{ height: 'calc(100% - 48px)' }}
    >
      <div
        className="bg-white h-full overflow-y-auto relative z-10 transition-all duration-200 xl:block xl:p-4 xl:translate-x-0"
        style={{
          width: '300px',
          transform: `translateX(${showSidebar ? '0px' : '-300px'})`,
        }}
      >
        <nav role="navigation">
          <div className="px-4">
            <h3 id="sidebar-header" className="text-normal font-bold py-4">
              {t('sidebar.navigation')}
            </h3>
          </div>
          <ul
            role="menu"
            aria-labelledby="sidebar-header"
            className="p-0 text-base list-none"
          >
            <li className="flex items-center h-12 leading-none border-b border-lightGray first:border-t">
              <Link
                to="/"
                data-testid="link-home"
                role="menuitem"
                onClick={() => onToggleSidebar()}
                className="w-full px-3 overflow-hidden block leading-12 text-teal hover:text-navy visited:text-teal focus-visible:bg-veryLightCyan"
              >
                {t('navigation.home')}
              </Link>
            </li>
            <li className="flex items-center h-12 leading-none border-b border-lightGray first:border-t">
              <Link
                to="/about"
                data-testid="link-about"
                role="menuitem"
                onClick={() => onToggleSidebar()}
                className="w-full px-3 overflow-hidden block leading-12 text-teal hover:text-navy visited:text-teal focus-visible:bg-veryLightCyan"
              >
                {t('navigation.about')}
              </Link>
            </li>
            <li className="flex items-center h-12 leading-none border-b border-lightGray first:border-t">
              <Link
                to="/404"
                data-testid="link-404"
                role="menuitem"
                onClick={() => onToggleSidebar()}
                className="w-full px-3 overflow-hidden block leading-12 text-teal hover:text-navy visited:text-teal focus-visible:bg-veryLightCyan"
              >
                {t('navigation.404')}
              </Link>
            </li>
          </ul>
        </nav>
        <aside>
          <div className="px-4">
            <h3
              tabIndex={-1}
              id="sidebar-language-switcher"
              className="text-normal font-bold py-4"
            >
              {t('sidebar.switch_language')}
            </h3>
            <ul
              aria-labelledby="sidebar-language-switcher"
              className="p-0 text-base sm:text-xl list-none"
            >
              <li className="leading-12">
                <button
                  type="button"
                  data-testid="language-switch-en"
                  onClick={() => i18n.changeLanguage('en')}
                  className="bg-lightCyan border-lightGray color-text border p-3 mb-2 full-width text-base w-full overflow-hidden"
                >
                  <span aria-label={t('languages.aria.en')}>
                    {t('languages.en')}
                  </span>
                </button>
              </li>
              <li className="leading-12">
                <button
                  type="button"
                  data-testid="language-switch-nl"
                  onClick={() => i18n.changeLanguage('nl')}
                  className="bg-lightCyan border-lightGray color-text border p-3 mb-2 full-width text-base w-full overflow-hidden"
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
        className={`absolute top-0 left-0 bg-black w-full h-full transition-opacity ${
          showSidebar ? 'opacity-50' : 'opacity-0'
        } xl:hidden`}
      />
    </div>
  );
};

export default Sidebar;
