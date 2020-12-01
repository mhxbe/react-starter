import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ResetCss, Main, Wrapper, Footer } from './App.styles';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import ErrorFallback, { errorHandler } from './common/ErrorFallback';
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

  React.useEffect(() => {
    if (window.innerWidth >= BREAKPOINT_DESKTOP) {
      setShowContent(true);
      setShowSidebar(true);
    }
  }, []);

  function toggleSidebar(): void {
    let mustShowContent = !showContent;
    let mustShowSidebar = !showSidebar;
    if (window.innerWidth >= BREAKPOINT_DESKTOP) {
      mustShowContent = true;
      mustShowSidebar = true;
    }
    setShowContent(mustShowContent);
    setShowSidebar(mustShowSidebar);
  }

  return (
    <>
      <ResetCss />
      <Header showSidebar={showSidebar} onToggleSidebar={toggleSidebar} />
      <Wrapper>
        <Sidebar showSidebar={showSidebar} onToggleSidebar={toggleSidebar} />
        <Main
          data-testid="content"
          role="main"
          aria-labelledby="page-heading"
          aria-hidden={!showContent}
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
        </Main>
      </Wrapper>
      <Footer>
        <div className="wrapper">
          <div>&copy; 2020 mhxbe</div>
        </div>
      </Footer>
    </>
  );
};

export default App;
