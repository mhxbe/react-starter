import * as React from 'react';
import { BREAKPOINT_DESKTOP } from '../constants';

interface ShowSidebarHook {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showContent: boolean;
  toggleSidebarRef: React.RefObject<HTMLButtonElement>;
}

function useShowSidebar(): ShowSidebarHook {
  const isDesktop = window.innerWidth >= BREAKPOINT_DESKTOP;

  const [showSidebar, setShowSidebar] = React.useState(isDesktop);
  const [showContent, setShowContent] = React.useState(true);
  const [innerWidth, setInnerWidth] = React.useState(0);
  const toggleSidebarRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function handleScreenResize(): number {
      setInnerWidth(window.innerWidth);
      return window.innerWidth;
    }
    window.addEventListener('resize', handleScreenResize);
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  React.useEffect(() => {
    if (innerWidth >= BREAKPOINT_DESKTOP) {
      setShowContent(true);
      setShowSidebar(true);
      return;
    }

    setShowContent(!showSidebar);
  }, [innerWidth, showSidebar]);

  return {
    showSidebar,
    setShowSidebar,
    showContent,
    toggleSidebarRef,
  };
}

export default useShowSidebar;
