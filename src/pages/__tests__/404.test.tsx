import * as React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-util';
import { BrowserRouter, useLocation } from 'react-router-dom';
import PageNotFound from '../404';

function WrappedComponent() {
  return <PageNotFound />;
}

test('Displays a title', () => {
  render(
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>
  );
  expect(screen.getByText('404.title')).toBeInTheDocument();
});

test.todo('Write test for clicking on "go back"-button');
