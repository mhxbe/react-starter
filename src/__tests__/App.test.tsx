import * as React from 'react';
import { render, screen, waitFor, fireEvent } from '../../utils/test-util';
import App from '../App';
import * as useWindowWidth from '../hooks/useWindowWidth';
import { BREAKPOINT_DESKTOP } from '../constants';

test('Should render a header, main & sidebar elements', () => {
  render(<App />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});

test('toggling of the sidebar, settings correct aria-labels on Sidebar & Content', async () => {
  render(<App />);
  // Only shows Content
  expect(screen.getByTestId('sidebar')).toHaveAttribute('aria-hidden', 'true');
  const mainWrapper = screen.getByTestId('main-wrapper');
  expect(mainWrapper).toHaveAttribute('aria-hidden', 'false');

  // Only shows Sidebar (aria-hidden false)
  fireEvent.click(screen.getByTestId('toggle-sidebar'));
  await waitFor(() => {
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'aria-hidden',
      'false'
    );
    expect(mainWrapper).toHaveAttribute('aria-hidden', 'true');
  });
});

test(`viewing the app with a resolution >= ${BREAKPOINT_DESKTOP}`, async () => {
  const mock = jest.spyOn(useWindowWidth, 'default');
  mock.mockImplementation(() => BREAKPOINT_DESKTOP + 1);
  render(<App />);
  fireEvent(window, new Event('resize'));

  const sidebar = screen.getByTestId('sidebar');
  const mainWrapper = screen.getByTestId('main-wrapper');
  const toggle = screen.getByTestId('toggle-sidebar');
  fireEvent.click(toggle);

  expect(mainWrapper).toHaveAttribute('aria-hidden', 'false');
  expect(sidebar).toHaveAttribute('aria-hidden', 'false');
});

test.todo('test about page');

test.todo('test 404 not found page');
