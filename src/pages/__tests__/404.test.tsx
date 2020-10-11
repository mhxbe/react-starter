import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  BrowserRouter,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import PageNotFound from '../404';

function WrappedComponent() {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  return <PageNotFound history={history} location={location} match={match} />;
}

test('Displays a title', () => {
  render(
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>
  );
  expect(screen.getByText('Page Not Found')).toBeInTheDocument();
});
