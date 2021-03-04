import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import ErrorFallback, { errorHandler } from './common/ErrorFallback';
import useWindowWidth from './hooks/useWindowWidth';

import { BREAKPOINT_DESKTOP } from './constants';
import { darkTheme, lightTheme } from './themes';

const Home = React.lazy(
  () => import(/* webpackChunkName: 'Home' */ './pages/Home')
);
const About = React.lazy(
  () => import(/* webpackChunkName: 'About' */ './pages/About')
);
const PageNotFound = React.lazy(
  () => import(/* webpackChunkName: 'PageNotFound' */ './pages/404')
);

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [showContent, setShowContent] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const windowWidth = useWindowWidth();
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent): void => {
      setDarkMode(event.matches);
    };
    prefersDarkMode.addEventListener('change', handleChange);

    return function () {
      prefersDarkMode.removeEventListener('change', handleChange);
    };
  }, []);

  React.useEffect(() => {
    setShowContent(true);
    windowWidth >= BREAKPOINT_DESKTOP
      ? setShowSidebar(true)
      : setShowSidebar(false);
  }, [windowWidth]);

  function toggleSidebar(): void {
    let mustShowContent = !showContent;
    let mustShowSidebar = !showSidebar;
    if (windowWidth >= BREAKPOINT_DESKTOP) {
      mustShowContent = true;
      mustShowSidebar = true;
    }
    setShowContent(mustShowContent);
    setShowSidebar(mustShowSidebar);
  }

  const languageRegex = `:lang(${i18n.languages.join('|')})`;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header showSidebar={showSidebar} onToggleSidebar={toggleSidebar} />
      <div className="bg-white text-normal flex flex-1 flex-wrap justify-center xl:my-0 xl:mx-auto xl:max-w-1260">
        <Sidebar showSidebar={showSidebar} onToggleSidebar={toggleSidebar} />
        <div
          aria-hidden={!showContent}
          data-testid="main-wrapper"
          className="my-0 mx-auto z-10 flex w-full p-4 sm:p-6 sm:max-w-800 xl:w-960"
        >
          <main
            tabIndex={-1}
            id="main-content"
            role="main"
            aria-labelledby="page-heading"
          >
            <React.Suspense
              fallback={<div data-testid="page-loading">Loading...</div>}
            >
              <Switch>
                <Route
                  exact
                  path={`/${languageRegex}/`}
                  render={() => (
                    <ErrorBoundary
                      key="home"
                      FallbackComponent={ErrorFallback}
                      onError={errorHandler}
                    >
                      <Home />
                    </ErrorBoundary>
                  )}
                />
                <Route
                  path={`/${languageRegex}/about`}
                  render={() => (
                    <ErrorBoundary
                      key="about"
                      FallbackComponent={ErrorFallback}
                      onError={errorHandler}
                    >
                      <About />
                    </ErrorBoundary>
                  )}
                />
                <Route
                  path={`/${languageRegex}/404`}
                  component={PageNotFound}
                />
                <Redirect exact from={'/'} to={`/${i18n.language}`} />
                <Redirect to={`/${i18n.language}/404`} />
              </Switch>
            </React.Suspense>
          </main>
        </div>
      </div>
      <footer className="bg-white flex flex-col justify-center items-center overflow-auto text-normal">
        <div className="items-center flex flex-col py-3 px-4 w-full lg:flex-row lg:justify-center lg:max-w-1100">
          <div>&copy; 2020 mhxbe</div>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default App;
