import * as React from 'react';
import styled from '@emotion/styled';

const Main = styled.main`
  background-color: midnightblue;
  height: 100%;
`;
const Title = styled.h1`
  color: springgreen;
`;

const App: React.FC = () => {
  return (
    <Main>
      <Title>Mikeeeh</Title>
    </Main>
  );
};

export default App;
