import * as React from 'react';
import { MenuIconWrapper } from './Header.styles';

interface MentuIconToggleProps {
  id: string;
  onToggleSidebar: (event: React.MouseEvent | React.KeyboardEvent) => void;
  showSidebar: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

const MenuIconToggle = React.forwardRef<HTMLDivElement, MentuIconToggleProps>(
  ({ id, onToggleSidebar, showSidebar }: MentuIconToggleProps, ref) => {
    function handleKeypress(event: React.KeyboardEvent): void {
      event.persist();
      // @todo move to util
      const circles = event.currentTarget.querySelectorAll('svg circle');
      const circle = showSidebar ? circles[0] : circles[1];
      circle.dispatchEvent(new Event('click'));
      return onToggleSidebar(event);
    }

    return (
      <MenuIconWrapper
        tabIndex={0}
        aria-expanded={showSidebar}
        onKeyPress={handleKeypress}
        onClick={onToggleSidebar}
        id={id}
        ref={ref}
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <polyline points="12,16 36,16" stroke="black" strokeWidth="3">
            <animate
              dur="0.25s"
              begin="startAnimation.begin"
              attributeName="points"
              values="12,16 36,16;12,24 36,24;16,16 32,32;"
              fill="freeze"
              keyTimes="0; 0.5; 1"
            />
            <animate
              dur="0.25s"
              begin="reverseAnimation.begin"
              attributeName="points"
              values="16,16 32,32;12,24 36,24;12,16 36,16;"
              fill="freeze"
            />
          </polyline>

          <polyline points="12,24 36,24" stroke="black" strokeWidth="3">
            <animate
              dur="0.125s"
              begin="startAnimation.begin"
              attributeName="stroke-width"
              values="3;3;3;3;0"
              fill="freeze"
              keyTimes="0; 1; 1; 1; 1"
            />
            <animate
              dur="0.125s"
              begin="reverseAnimation.begin"
              attributeName="stroke-width"
              values="0;0;0;0;3"
              fill="freeze"
              keyTimes="0; 1; 1; 1; 1"
            />
          </polyline>

          <polyline points="12,32 35,32" stroke="black" strokeWidth="3">
            <animate
              dur="0.25s"
              begin="startAnimation.begin"
              attributeName="points"
              values="12,32 36,32;12,24 36,24;16,32 32,16"
              fill="freeze"
              keyTimes="0; 0.5; 1"
            />
            <animate
              dur="0.25s"
              begin="reverseAnimation.begin"
              attributeName="points"
              values="16,32 32,16;12,24 36,24;12,32 36,32;"
              fill="freeze"
            />
          </polyline>

          <circle id="off" cx="24" cy="24" r="36" fillOpacity="0">
            <animate
              dur="0.001s"
              id="reverseAnimation"
              attributeName="r"
              values="36; 0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="r"
              values="0; 36"
              begin="startAnimation.end"
              fill="freeze"
            />
          </circle>
          <circle id="on" cx="24" cy="24" r="36" fillOpacity="0">
            <animate
              dur="0.01s"
              id="startAnimation"
              attributeName="r"
              values="36; 0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.01s"
              attributeName="r"
              values="0; 36"
              fill="freeze"
              begin="reverseAnimation.end"
            />
          </circle>
        </svg>
      </MenuIconWrapper>
    );
  }
);

MenuIconToggle.displayName = 'MenuIconToggle';

export default MenuIconToggle;
