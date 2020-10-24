import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

const toggleMock = jest.fn();
const HeaderComponent = <Header onToggleSidebar={toggleMock} showSidebar />;

test('Header displays a title', () => {
  render(HeaderComponent);
  expect(screen.getByTestId('toggle-sidebar')).toBeInTheDocument();
});

test('Header has a toggle-button', () => {
  render(HeaderComponent);
  expect(screen.getByTestId('toggle-sidebar')).toBeInTheDocument();
});
