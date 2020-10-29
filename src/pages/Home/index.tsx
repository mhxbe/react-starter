import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation, Trans } from 'react-i18next';
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
      <Paragraph>
        <Trans i18nKey="home.workbox.link">
          <Anchor
            href="https://developers.google.com/web/tools/workbox"
            title={t('home.workbox.description')}
          >
            Google Workbox
          </Anchor>
        </Trans>
      </Paragraph>
      <Paragraph>
        <Trans i18nKey="home.github.link">
          <Anchor
            href="https://github.com/mhxbe/react-starter"
            title={t('home.github.description')}
          >
            github.com/mhxbe/react-starter
          </Anchor>
        </Trans>
      </Paragraph>
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
