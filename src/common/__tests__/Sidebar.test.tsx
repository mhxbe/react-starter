import * as React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../../../utils/test-util';
import Sidebar from '../Sidebar';

const toggleSidebarMock = jest.fn();
const renderSidebar = (visible: boolean) => (
  <BrowserRouter>
    <Sidebar onToggleSidebar={toggleSidebarMock} showSidebar={visible} />
  </BrowserRouter>
);

test('Displays a sidebar with 3 menu items', () => {
  render(renderSidebar(true));
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByRole('menu').children.length).toEqual(3);
});

test('Displays an Overlay with opacity 0.5 when Sidebar is shown', () => {
  render(renderSidebar(true));
  const overlay = screen.getByTestId('overlay');
  expect(overlay).toBeInTheDocument();
  expect(overlay).toHaveStyle('opacity: 0.5');
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

test('Clicking home link should call onToggleSidebar', () => {
  render(renderSidebar(true));
  fireEvent.click(screen.getByTestId('link-home'));
  expect(toggleSidebarMock).toHaveBeenCalled();
});
test('Clicking about link should call onToggleSidebar', () => {
  render(renderSidebar(true));
  fireEvent.click(screen.getByTestId('link-about'));
  expect(toggleSidebarMock).toHaveBeenCalled();
});
test('Clicking 404 link should call onToggleSidebar', () => {
  render(renderSidebar(true));
  fireEvent.click(screen.getByTestId('link-404'));
  expect(toggleSidebarMock).toHaveBeenCalled();
});

afterAll(() => {
  jest.resetAllMocks();
});
