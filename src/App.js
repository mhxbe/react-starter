import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Name = styled.h1`
  color: rebeccapurple;
`;

const Main = styled.main`
  background-color: mediumaquamarine;
  padding: 24px;
  height: 100%;
`;

const App = ({ name, luckyNumber = 13 }) => {
  return (
    <Main>
      Hello <Name>{name}</Name> {luckyNumber}
    </Main>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  luckyNumber: PropTypes.number,
};

export default App;
