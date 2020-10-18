import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

const mockOnToggleSidebar = jest.fn();
const renderSidebar = (visible: boolean) => (
  <BrowserRouter>
    <Sidebar onToggleSidebar={mockOnToggleSidebar} showSidebar={visible} />
  </BrowserRouter>
);

test('Displays a sidebar with 3 menu items', () => {
  render(renderSidebar(true));
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByRole('menubar').children.length).toEqual(3);
});

test('Displays an Overlay with opacity 0.5 when Sideba is shown & triggers onToggleSidebar when clicked', () => {
  render(renderSidebar(true));
  const overlay = screen.getByTestId('overlay');
  expect(overlay).toBeInTheDocument();
  expect(overlay).toHaveStyle('opacity: 0.5');
  fireEvent.click(overlay);
  expect(mockOnToggleSidebar).toHaveBeenCalled();
});

test('Displays an Overlay with opacity 0.0 when Sidebar is not shown', () => {
  render(renderSidebar(false));
  const overlay = screen.getByTestId('overlay');
  expect(overlay).toBeInTheDocument();
  expect(overlay).toHaveStyle('opacity: 0');
});
