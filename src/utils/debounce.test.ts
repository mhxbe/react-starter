import debounce from './debounce';

describe('debounce()', () => {
  jest.useFakeTimers();

  test('should only call a function once if it is called multiple times in a short period', () => {
    const consoleSpy = jest.spyOn(window.console, 'log');
    function log(): void {
      console.log('debounce debounce');
    }
    const debouncedLog = debounce(log);

    debouncedLog();
    debouncedLog();
    debouncedLog();

    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith('debounce debounce');
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    }, 500);

    jest.runAllTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});
