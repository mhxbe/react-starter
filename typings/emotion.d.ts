import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    color: string;
    focus: string;
    header: {
      background: string;
      hamburger: string;
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
    skipLink: {
      background: string;
      border: string;
      color: string;
    };
  }
}
