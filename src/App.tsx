import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import ErrorFallback, { errorHandler } from './common/ErrorFallback';
import useWindowWidth from './hooks/useWindowWidth';

import { BREAKPOINT_DESKTOP } from './constants';

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
    if (windowWidth >= BREAKPOINT_DESKTOP) {
      mustShowContent = true;
      mustShowSidebar = true;
    }
    setShowContent(mustShowContent);
    setShowSidebar(mustShowSidebar);
  }

  return (
    <>
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
            className="w-full"
          >
            <React.Suspense
              fallback={<div data-testid="page-loading">Loading...</div>}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <ErrorBoundary
                      key="home"
                      FallbackComponent={ErrorFallback}
                      onError={errorHandler}
                    >
                      <Home />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/:lang"
                  element={
                    <ErrorBoundary
                      key="home"
                      FallbackComponent={ErrorFallback}
                      onError={errorHandler}
                    >
                      <Home />
                    </ErrorBoundary>
                  }
                />
                <Route path="/:lang/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </React.Suspense>
          </main>
        </div>
      </div>
      <footer className="bg-white flex flex-col justify-center items-center overflow-auto text-normal">
        <div className="items-center flex flex-col py-3 px-4 w-full lg:flex-row lg:justify-center lg:max-w-1100">
          <div>&copy; 2020 mhxbe</div>
        </div>
      </footer>
    </>
  );
};

export default App;
