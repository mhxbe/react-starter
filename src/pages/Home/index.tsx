/** @jsx jsx */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { css, jsx } from '@emotion/react';
import {
  paragraph,
  title,
  subTitle,
  link,
  button,
  list,
} from '../../App.styles';

const Home: React.FC = () => {
  const handleError = useErrorHandler();
  const { t } = useTranslation();

  return (
    <div data-testid="page-home">
      <Helmet>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
      </Helmet>
      <h1 id="page-heading" css={title}>
        {t('home.title')}
      </h1>
      <div>
        <p css={paragraph}>{t('home.description')}</p>
        <p css={paragraph}>{t('home.workbox.text')} </p>
        <p css={paragraph}>{t('home.github.text')} </p>
      </div>
      <ul
        css={css`
          ${list};
          margin-bottom: 1rem;
          padding-left: 1.25rem;
        `}
      >
        <li>
          <a
            href="https://developers.google.com/web/tools/workbox"
            title={t('home.workbox.description')}
            css={link}
          >
            Google Workbox
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mhxbe/react-starter"
            title={t('home.github.description')}
            css={link}
          >
            Github react-starter
          </a>
        </li>
      </ul>
      <h2 css={subTitle}>Error Boundary</h2>
      <p css={paragraph}>{t('home.error_boundary.description')}</p>
      <button
        css={button}
        data-testid="button-error-boundary"
        onClick={() => handleError(new Error('Example error'))}
      >
        {t('home.error_boundary.button')}
      </button>
    </div>
  );
};

export default Home;
