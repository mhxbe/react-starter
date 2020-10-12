import * as React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

test('Displays a title', () => {
  render(<About />);
  expect(screen.getByText('About')).toBeInTheDocument();
});
