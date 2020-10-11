import * as React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

const history = createMemoryHistory();
const AppComponent = (
  <Router history={history}>
    <App />
  </Router>
);

test('Should render a Header, Content & Sidebar component', () => {
  render(AppComponent);

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByTestId('content')).toBeInTheDocument();
});

test('Render the Home component by default', () => {
  render(AppComponent);
  expect(screen.getByTestId('page-home')).toBeInTheDocument();
});

test('Navigate to /about renders a Loading component and afterwards the About component when loading is succesful', async () => {
  history.push('/about');
  render(AppComponent);

  expect(screen.getByTestId('page-loading')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId('page-about')).toBeInTheDocument();
  });
});

test('Navigating back to /home after should immediately show Home component without loading', async () => {
  history.push('/about');
  history.push('/');
  render(AppComponent);

  expect(screen.getByTestId('page-home')).toBeInTheDocument();
});

test('Redirect to 404(PageNotFound) when navigating to unexisting route', async () => {
  history.push('/some/bad/route');
  render(AppComponent);

  expect(screen.getByTestId('page-loading')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId('page-404')).toBeInTheDocument();
  });
});

test('Sidebar is hidden by default & toggleble by clicking MenuIconToggle', () => {
  render(AppComponent);

  expect(screen.getByTestId('sidebar')).toHaveAttribute('aria-hidden', 'true');

  fireEvent.click(screen.getByTestId('toggle-sidebar'));
  expect(screen.getByTestId('sidebar')).toHaveAttribute('aria-hidden', 'false');
});
