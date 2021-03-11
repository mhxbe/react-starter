import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trans, useTranslation } from 'react-i18next';

const PageNotFound: React.FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const { t } = useTranslation();

  return (
    <div data-testid="page-404">
      <Helmet>
        <title>{t('404.title')}</title>
        <meta name="description" content={t('404.description')} />
        <link rel="canonical" href={location.origin + location.pathname} />
      </Helmet>
      <h1
        id="page-heading"
        className="color-text text-xl sm:text-3xl font-bold leading-none border-b-2 border-cyan mb-4 pb-4 sm:mb-5 sm:pb-5"
      >
        {t('404.title')}
      </h1>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        {t('404.description')}
      </p>
      <ul className="p-0 text-base xl:text-xl">
        <li className="leading-12 text-xl">
          <Trans i18nKey="404.navigate_home">
            <Link to="/" className="inline-block text-teal hover:text-navy" />
          </Trans>
        </li>
        <li className="leading-12 text-xl">
          <Trans i18nKey="404.go_back">
            <button
              type="button"
              onClick={history.goBack}
              className="bg-transparent border-0 text-teal cursor-pointer m-0 p-0 no-underline hover:text-navy"
            />
          </Trans>
        </li>
      </ul>
    </div>
  );
};

export default PageNotFound;
