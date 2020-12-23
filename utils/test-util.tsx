import * as React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../src/themes';

const AllTheProviders: React.FC = (props) => {
  return <ThemeProvider theme={lightTheme}>{props.children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
