/** @jsx jsx */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { css, jsx } from '@emotion/react';
import { link, list } from '../../App.styles';

const Home: React.FC = () => {
  const handleError = useErrorHandler();
  const { t } = useTranslation();

  return (
    <div data-testid="page-home">
      <Helmet>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
      </Helmet>
      <h1
        id="page-heading"
        className="color-text text-xl sm:text-3xl font-bold leading-none border-b-2 border-cyan mb-4 pb-4 sm:mb-5 sm:pb-5"
      >
        {t('home.title')}
      </h1>
      <div>
        <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
          {t('home.description')}
        </p>
        <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
          {t('home.workbox.text')}
        </p>
        <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
          {t('home.github.text')}
        </p>
      </div>
      <ul
        css={css`
          ${list};
          margin-bottom: 1rem;
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
      <h2 className="text-normal text-base font-bold leading-none pb-3 sm:text-2xl sm:pb-2">
        Error Boundary
      </h2>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        {t('home.error_boundary.description')}
      </p>
      <button
        data-testid="button-error-boundary"
        onClick={() => handleError(new Error('Example error'))}
        className="bg-lightCyan border-lightGray color-text border p-3"
      >
        {t('home.error_boundary.button')}
      </button>
    </div>
  );
};

export default Home;
