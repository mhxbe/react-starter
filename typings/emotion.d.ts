import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: string;
    header: {
      background: string;
      hamburger: string;
    };
    main: {
      background: string;
    };
    sidebar: {
      background: string;
      border: string;
      href: {
        link: string;
        hover: string;
        focus: string;
      };
    };
    footer: {
      background: string;
    };
    title: {
      color: string;
      border: string;
    };
    href: {
      link: string;
      visited: string;
      hover: string;
    };
    button: {
      background: string;
      border: string;
      color: string;
    };
  }
}
