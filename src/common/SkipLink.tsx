import * as React from 'react';

interface SkipLinkProps {
  href: string;
  text: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ href, text }) => {
  return (
    <a
      data-testid={`skip-link-${href}`}
      href={href}
      className={`custom-skip-link overflow-hidden absolute whitespace-nowrap focus:items-center
      focus:bg-darkGray focus:text-white focus:flex focus:overflow-auto focus:no-underline
      focus:py-0 focus:px-2 focus:leading-10 focus:border-2 focus:border-white focus:z-40`}
    >
      {text}
    </a>
  );
};

export default SkipLink;
