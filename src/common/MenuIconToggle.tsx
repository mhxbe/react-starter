import * as React from 'react';

interface MentuIconToggleProps {
  id: string;
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

const MenuIconToggle: React.FC<MentuIconToggleProps> = ({
  id,
  onToggleSidebar,
  showSidebar,
}) => {
  return (
    <button
      type="button"
      data-testid="toggle-sidebar"
      aria-expanded={showSidebar}
      aria-label={`${showSidebar ? 'Hide' : 'Show'} sidebar navigation`}
      onClick={onToggleSidebar}
      id={id}
      className="bg-transparent border-0 cursor-pointer h-12 w-12 m-0 min-h-12 min-w-12 overflow-hidden absolute top-0 left-1 xl:hidden"
    >
      <svg className="h-12 w-12 inline" viewBox="0 0 48 48">
        <polyline
          className="text-normal"
          points="12,16 36,16"
          stroke="black"
          strokeWidth="3"
        />
        <polyline
          className="text-normal"
          points="12,24 36,24"
          stroke="black"
          strokeWidth="3"
        />
        <polyline
          className="text-normal"
          points="12,32 35,32"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
    </button>
  );
};

export default MenuIconToggle;
