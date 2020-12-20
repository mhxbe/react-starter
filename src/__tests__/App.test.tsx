import * as React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import { BREAKPOINT_DESKTOP } from '../constants';

const history = createMemoryHistory();
const renderAppComponent = () => (
  <Router history={history}>
    <App />
  </Router>
);

test('Should render a header, main & sidebar elements', () => {
  render(renderAppComponent());

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});

describe('Rendering components through routing', () => {
  test('Render the Home component by default', () => {
    render(renderAppComponent());
    expect(screen.getByTestId('page-home')).toBeInTheDocument();
  });

  test('Navigate to /about renders a Loading component and afterwards the About component when loading is succesful', async () => {
    history.push('/about');
    render(renderAppComponent());

    expect(screen.getByTestId('page-loading')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByTestId('page-about')).toBeInTheDocument()
    );
  });

  test('Navigating back to /home after should immediately show Home component without loading', () => {
    history.push('/about');
    history.push('/');
    render(renderAppComponent());

    expect(screen.getByTestId('page-home')).toBeInTheDocument();
  });

  test('Redirect to 404(PageNotFound) when navigating to unexisting route', async () => {
    history.push('/some/bad/route');
    render(renderAppComponent());

    expect(screen.getByTestId('page-loading')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByTestId('page-404')).toBeInTheDocument()
    );
  });

  test('Sidebar is hidden by default & toggleble by clicking MenuIconToggle', () => {
    render(renderAppComponent());

    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'aria-hidden',
      'true'
    );

    fireEvent.click(screen.getByTestId('toggle-sidebar'));
    expect(screen.getByTestId('sidebar')).toHaveAttribute(
      'aria-hidden',
      'false'
    );
  });
});

test('toggling of the sidebar, settings correct aria-labels on Sidebar & Content', async () => {
  render(renderAppComponent());
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
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: BREAKPOINT_DESKTOP + 1,
  });

  render(renderAppComponent());
  fireEvent(window, new Event('resize'));
  const sidebar = await screen.getByTestId('sidebar');
  const mainWrapper = screen.getByTestId('main-wrapper');
  await waitFor(() => {
    expect(mainWrapper).toHaveAttribute('aria-hidden', 'false');
    expect(sidebar).toHaveAttribute('aria-hidden', 'false');
  });
});
