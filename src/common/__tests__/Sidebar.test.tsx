import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

const mockOnToggleSidebar = jest.fn();
const SidebarComponent = (
  <BrowserRouter>
    <Sidebar
      onToggleSidebar={mockOnToggleSidebar}
      showSidebar
      toggleSidebarRef={React.createRef()}
    />
  </BrowserRouter>
);

test('Displays a sidebar with 3 menu items', () => {
  render(SidebarComponent);

  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByRole('menubar').children.length).toEqual(3);
});
