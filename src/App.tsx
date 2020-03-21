import * as React from 'react';
import {
  ResetCss,
  Header,
  Title,
  Main,
  Content,
  CopyRight,
} from './App.styles';

const App: React.FC = () => {
  return (
    <>
      <ResetCss />
      <Header>
        <Title>react-starter</Title>
      </Header>
      <Main role="main">
        <Content>
          This is an opinionated starter-kit for quickly bootstrapping
          client-side React projects written in TypeScript.
        </Content>

        <CopyRight>&copy; 2020 Mike Henderyckx</CopyRight>
      </Main>
    </>
  );
};

export default App;
