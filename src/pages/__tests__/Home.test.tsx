import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import Home from '../Home';
import ErrorFallback from '../../common/ErrorFallback';

test('Displays a title', () => {
  render(<Home />);
  expect(screen.getByText('React Starterkit Template')).toBeInTheDocument();
});

test('Renders an error-boundary fallback component when the button is clicked', () => {
  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />)
    </ErrorBoundary>
  );
  fireEvent.click(screen.getByTestId('button-error-boundary'));

  expect(screen.getByTestId('error-fallback-component')).toBeInTheDocument();
  expect(screen.queryByTestId('page-home')).not.toBeInTheDocument();
});
