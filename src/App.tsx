import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { ResetCss, Main, Content } from './App.styles';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import useShowSidebar from './hooks/show-sidebar';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/404';

const App: React.FC = () => {
  const {
    showSidebar,
    setShowSidebar,
    showContent,
    setShowContent,
    toggleSidebarRef,
  } = useShowSidebar();

  return (
    <>
      <ResetCss />
      <Header
        showSidebar={showSidebar}
        onToggleSidebar={() => {
          setShowSidebar(!showSidebar);
          setShowContent(showSidebar);
        }}
        toggleSidebarRef={toggleSidebarRef}
      />
      <Main role="main">
        <Sidebar
          showSidebar={showSidebar}
          onToggleSidebar={setShowSidebar}
          toggleSidebarRef={toggleSidebarRef}
        />
        <Content aria-hidden={!showContent}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/404"
              component={(props: RouteComponentProps) => (
                <PageNotFound {...props} />
              )}
            />
            <Redirect to="/404" />
          </Switch>
        </Content>
      </Main>
    </>
  );
};

export default App;
