import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index.tsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>,
      div
    );
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
