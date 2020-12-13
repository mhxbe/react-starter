import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorFallback, { errorHandler } from '../ErrorFallback';

const mockResetErrorBoundary = jest.fn();

test('Should call resetErrorBoundary', () => {
  const error = new Error('Fake error');
  render(
    <ErrorFallback error={error} resetErrorBoundary={mockResetErrorBoundary} />
  );

  fireEvent.click(screen.getByText('Try again.'));
  expect(mockResetErrorBoundary).toHaveBeenCalled();
});

test('errorHandler should return given error', () => {
  const originalDebug = console.debug;
  console.debug = jest.fn();

  const fakeError = new Error('Booom!');
  expect(errorHandler(fakeError)).toEqual(fakeError);

  console.debug = originalDebug;
});
