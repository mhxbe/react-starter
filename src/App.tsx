import * as React from 'react';
import styled from '@emotion/styled';
import Hello from './Hello';

const Main = styled.main`
  background-color: mediumseagreen;
  height: 100%;
`;
const Title = styled.h1`
  color: indigo;
`;

const App = ({ name }: any) => {
  return (
    <Main>
      <Title>Hello {name}</Title>
      <Hello name="Lilly" />
    </Main>
  );
};

export default App;
