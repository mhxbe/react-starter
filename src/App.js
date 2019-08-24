import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const mainStyle = css`
  background-color: turquoise;
  padding: 24px;
  height: 100%;
`;

const h1Style = css`
  color: rebeccapurple;
`;

const App = ({ name, luckyNumber = 13 }) => {
  return (
    <main css={mainStyle}>
      Hello <h1 css={h1Style}>{name}</h1> {luckyNumber}
    </main>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  luckyNumber: PropTypes.number,
};

export default App;
