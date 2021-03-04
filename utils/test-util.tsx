import * as React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';

const AllTheProviders: React.FC = (props) => {
  return <div>{props.children}</div>;
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
