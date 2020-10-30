import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import Home from '../Home';
import ErrorFallback from '../../common/ErrorFallback';

test('Displays a title', () => {
  render(<Home />);
  expect(screen.getByText('home.title')).toBeInTheDocument();
});

test('Renders an error-boundary fallback component when the button is clicked', () => {
  const originalError = console.error;
  console.error = jest.fn();

  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />)
    </ErrorBoundary>
  );
  fireEvent.click(screen.getByTestId('button-error-boundary'));

  expect(screen.getByTestId('error-fallback-component')).toBeInTheDocument();
  expect(screen.queryByTestId('page-home')).not.toBeInTheDocument();

  console.error = originalError;
});
