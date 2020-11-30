import * as React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  expect(screen.getByRole('menu').children.length).toEqual(3);
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

const mockChangeLanguage = jest.fn();
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockChangeLanguage,
    },
    t: jest.fn(),
  }),
}));

test('Change language', async () => {
  render(renderSidebar(true));
  const dutchLanguageButton = screen.getByTestId('language-switch-nl');
  const englishLanguageButton = screen.getByTestId('language-switch-en');
  expect(dutchLanguageButton).toBeInTheDocument();
  expect(englishLanguageButton).toBeInTheDocument();

  fireEvent.click(dutchLanguageButton);
  await waitFor(() => {
    expect(mockChangeLanguage).toHaveBeenCalledWith('nl');
  });
  fireEvent.click(englishLanguageButton);
  await waitFor(() => {
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
  });
});

afterAll(() => {
  jest.resetAllMocks();
});
