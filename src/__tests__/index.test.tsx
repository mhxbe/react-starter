import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const mockCreateRootRender = jest.fn();
jest.mock('react-dom/client', () => ({
  createRoot: () => ({
    render: mockCreateRootRender,
  }),
}));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index.tsx');
    expect(mockCreateRootRender).toHaveBeenCalledWith(
      <BrowserRouter basename="/">
        <React.Suspense fallback="Loading...">
          <App />
        </React.Suspense>
      </BrowserRouter>
    );
  });
});

describe('i18next', () => {
  const i18nextEvents: any = {};

  jest.mock('i18next', () => ({
    use: () => ({
      init: (): any => ({
        t: (k: any) => k,
      }),
      use: () => ({
        init: (): any => ({
          t: (k: any) => k,
        }),
        use: () => ({
          init: (): any => ({
            t: (k: any) => k,
          }),
        }),
      }),
    }),
    on: jest.fn((event, callback) => {
      i18nextEvents[event] = callback;
    }),
  }));

  it("should handle change the document language when 'languageChanged' is triggered", () => {
    require('../index.tsx');
    i18nextEvents.languageChanged('nl');
    expect(window.document.documentElement.lang).toEqual('nl');
    i18nextEvents.languageChanged('en');
    expect(window.document.documentElement.lang).toEqual('en');
  });
});

describe('Workbox ServiceWorker', () => {
  const OLD_ENV = process.env;
  const events: any = {};
  const mockWindowLocationReload = jest.fn();
  Object.defineProperty(global.navigator, 'serviceWorker', { value: {} });
  Object.defineProperty(window, 'location', {
    value: {
      reload: mockWindowLocationReload,
      pathname: '/en/some/url',
    },
  });
  const mockServiceWorkerRegister = jest.fn();
  const mockWorkBox = jest.fn().mockReturnValue({
    register: mockServiceWorkerRegister,
    addEventListener: jest.fn((event, callback) => {
      events[event] = callback;
    }),
  });
  jest.mock('workbox-window', () => ({
    Workbox: mockWorkBox,
  }));

  beforeEach(() => {
    jest.resetModules(); // clear cache
    process.env = { ...OLD_ENV };
  });

  it('should not register the serviceWorker when NODE_ENV is not "production"', () => {
    process.env.NODE_ENV = 'development';
    require('../index.tsx');
    expect(mockServiceWorkerRegister).not.toHaveBeenCalled();
  });

  it('should register the serviceWorker when NODE_ENV is "production"', () => {
    process.env.NODE_ENV = 'production';
    require('../index.tsx');
    expect(mockServiceWorkerRegister).toHaveBeenCalled();
  });

  it("should handle the 'installed' event", () => {
    process.env.NODE_ENV = 'production';
    require('../index.tsx');
    const consoleSpy = jest.spyOn(console, 'log');
    events.installed({ isUpdate: false });
    expect(consoleSpy).toHaveBeenCalledWith('App successfully installed!');

    events.installed({ isUpdate: true });
    expect(mockWindowLocationReload).toHaveBeenCalled();
  });

  it("should handle the 'activated' event", () => {
    process.env.NODE_ENV = 'production';
    require('../index.tsx');
    const consoleSpy = jest.spyOn(console, 'log');
    events.activated({ isUpdate: false });
    expect(consoleSpy).toHaveBeenCalledWith(
      'Service worker activated for the first time!'
    );

    events.activated({ isUpdate: true });
  });

  afterAll(() => {
    process.env = OLD_ENV;
    jest.resetAllMocks();
  });
});
