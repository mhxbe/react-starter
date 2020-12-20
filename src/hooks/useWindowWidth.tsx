import * as React from 'react';
import debounce from '../utils/debounce';

function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useLayoutEffect(() => {
    function updateSize(): void {
      setWindowWidth(window.innerWidth);
    }
    const debouncedResize = debounce(updateSize);
    window.addEventListener('resize', debouncedResize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return windowWidth;
}

export default useWindowWidth;
