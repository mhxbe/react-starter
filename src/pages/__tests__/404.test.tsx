import * as React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-util';
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
  expect(screen.getByText('404.title')).toBeInTheDocument();
});
