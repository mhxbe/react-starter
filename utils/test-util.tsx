import * as React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: React.FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
