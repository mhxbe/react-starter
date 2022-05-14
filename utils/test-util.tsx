import * as React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

interface AllProvidersProps {
  children: React.ReactNode;
}
const AllTheProviders: React.FC<AllProvidersProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// eslint-disable-next-line import/export
export * from '@testing-library/react'; // re-export everything

// eslint-disable-next-line import/export
export { customRender as render }; // override render method
