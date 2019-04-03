import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Name = styled.h1`
  color: royalblue;
`;

const App = ({ name, luckyNumber }) => {
  return (
    <main>
      Hello <Name>{name}</Name> {luckyNumber}
    </main>
  );
};

App.defaultProps = {
  luckyNumber: 13,
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  luckyNumber: PropTypes.number,
};

export default App;
