import React from 'react';
import PropTypes from 'prop-types';

const App = ({ name, luckyNumber }) => {
  return (
    <main>
      Hello {name} {luckyNumber}
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
