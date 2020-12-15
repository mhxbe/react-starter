/** @jsx jsx */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { css, jsx } from '@emotion/react';
import { Paragraph, Title, SubTitle, Anchor } from '../../App.styles';

const Home: React.FC = () => {
  const handleError = useErrorHandler();
  const { t } = useTranslation();

  return (
    <div data-testid="page-home">
      <Helmet>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
      </Helmet>
      <Title id="page-heading">{t('home.title')}</Title>
      <Paragraph>{t('home.description')}</Paragraph>
      <Paragraph>{t('home.workbox.text')} </Paragraph>
      <Paragraph>{t('home.github.text')} </Paragraph>
      <ul
        css={css`
          margin: 0 0 1.5rem 0;
          padding: 0 0 0 1.5rem;
        `}
      >
        <li>
          <Anchor
            href="https://developers.google.com/web/tools/workbox"
            title={t('home.workbox.description')}
          >
            Google Workbox
          </Anchor>
        </li>
        <li>
          <Anchor
            href="https://github.com/mhxbe/react-starter"
            title={t('home.github.description')}
          >
            github react-starter
          </Anchor>
        </li>
      </ul>
      <SubTitle>Error Boundary</SubTitle>
      <Paragraph>{t('home.error_boundary.description')}</Paragraph>
      <button
        data-testid="button-error-boundary"
        onClick={() => handleError(new Error('Example error'))}
      >
        {t('home.error_boundary.button')}
      </button>
    </div>
  );
};

export default Home;
