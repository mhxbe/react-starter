/** @jsx jsx */
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trans, useTranslation } from 'react-i18next';
import { css, jsx } from '@emotion/react';
import { backButton, link, list } from '../../App.styles';

const PageNotFound: React.FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const { t } = useTranslation();
  return (
    <div data-testid="page-404">
      <Helmet>
        <title>{t('404.title')}</title>
        <meta name="description" content={t('404.description')} />
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
      <ul
        css={css`
          ${list}
        `}
      >
        <li>
          <Trans i18nKey="404.navigate_home">
            <Link to="/" css={link} />
          </Trans>
        </li>
        <li>
          <Trans i18nKey="404.go_back">
            <button type="button" onClick={history.goBack} css={backButton} />
          </Trans>
        </li>
      </ul>
    </div>
  );
};

export default PageNotFound;
