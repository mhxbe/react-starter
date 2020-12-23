import * as React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-util';
import About from '../About';

test('Displays a title', () => {
  render(<About />);
  expect(screen.getByText('about.title')).toBeInTheDocument();
});
