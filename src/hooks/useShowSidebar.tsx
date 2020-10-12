import * as React from 'react';
import { BREAKPOINT_DESKTOP } from '../constants';

interface ShowSidebarHook {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebarRef: React.RefObject<HTMLDivElement>;
}

function useShowSidebar(): ShowSidebarHook {
  const isDesktop = window.innerWidth >= BREAKPOINT_DESKTOP;

  const [showSidebar, setShowSidebar] = React.useState(isDesktop);
  const [showContent, setShowContent] = React.useState(true);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const toggleSidebarRef = React.useRef<HTMLDivElement>(null);

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
    setShowContent(true);
    setShowSidebar(innerWidth >= BREAKPOINT_DESKTOP);
  }, [innerWidth]);

  return {
    showSidebar,
    setShowSidebar,
    showContent,
    setShowContent,
    toggleSidebarRef,
  };
}

export default useShowSidebar;
