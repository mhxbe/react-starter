import * as React from 'react';
import { render, screen, waitFor, fireEvent } from '../../../utils/test-util';
import PageNotFound from '../404';

test('Displays a title', () => {
  render(<PageNotFound />);
  expect(screen.getByText('404.title')).toBeInTheDocument();
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: () => mockNavigate,
  };
});

test('Clicking "go back"-button should run navigate(-1)', async () => {
  render(<PageNotFound />);
  fireEvent.click(screen.getByTestId('go-back'));
  await waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
