import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SkipLink from '../SkipLink';

it('Should focus the SkipLink when tab is pressed', () => {
  render(<SkipLink text="Skip me" href="#main" />);
  expect(screen.getByTestId('skip-link-#main')).toBeInTheDocument();
  userEvent.tab()
  expect(screen.getByTestId('skip-link-#main')).toHaveFocus();
});
