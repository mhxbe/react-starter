/** @jsx jsx */
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { jsx } from '@emotion/react';
import { ResetCss, wrapper, mainWrapper, main, footer } from './App.styles';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import ErrorFallback, { errorHandler } from './common/ErrorFallback';
import useWindowWidth from './hooks/useWindowWidth';
import { BREAKPOINT_DESKTOP } from './constants';

const Home = React.lazy(
  () => import(/* webpackChunkName: 'home' */ './pages/Home')
);
const About = React.lazy(
  () => import(/* webpackChunkName: 'about' */ './pages/About')
);
const PageNotFound = React.lazy(
  () => import(/* webpackChunkName: '404' */ './pages/404')
);

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [showContent, setShowContent] = React.useState(true);
  const windowWidth = useWindowWidth();

  React.useEffect(() => {
    setShowContent(true);
    windowWidth >= BREAKPOINT_DESKTOP
      ? setShowSidebar(true)
      : setShowSidebar(false);
  }, [windowWidth]);

  function toggleSidebar(): void {
    let mustShowContent = !showContent;
    let mustShowSidebar = !showSidebar;
    console.log('windowWidth', windowWidth);
    if (windowWidth >= BREAKPOINT_DESKTOP) {
      mustShowContent = true;
      mustShowSidebar = true;
    }
    setShowContent(mustShowContent);
    setShowSidebar(mustShowSidebar);
  }

  return (
    <React.Fragment>
      <ResetCss />
      <Header showSidebar={showSidebar} onToggleSidebar={toggleSidebar} />
      <div css={wrapper}>
        <Sidebar showSidebar={showSidebar} onToggleSidebar={toggleSidebar} />
        <div
          aria-hidden={!showContent}
          data-testid="main-wrapper"
          css={mainWrapper}
        >
          <main
            tabIndex={-1}
            id="main-content"
            role="main"
            aria-labelledby="page-heading"
            css={main}
          >
            <React.Suspense
              fallback={<div data-testid="page-loading">Loading...</div>}
            >
              <Switch>
                <Route
                  exact
                  path="/"
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
                  path="/about"
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
                <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" />
              </Switch>
            </React.Suspense>
          </main>
        </div>
      </div>
      <footer css={footer}>
        <div className="wrapper">
          <div>&copy; 2020 mhxbe</div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App;
