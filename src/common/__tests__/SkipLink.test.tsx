import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-util';
import SkipLink from '../SkipLink';

it('Should focus the SkipLink when tab is pressed', () => {
  const { queryByTestId } = render(<SkipLink text="Skip me" href="#main" />);
  expect(queryByTestId('skip-link-#main')).toBeInTheDocument();
  userEvent.tab();
  expect(queryByTestId('skip-link-#main')).toHaveFocus();
});
