/** @jsx jsx */
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trans, useTranslation } from 'react-i18next';
import { css, jsx } from '@emotion/react';
import { paragraph, title, button, link, list } from '../../App.styles';

const PageNotFound: React.FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const { t } = useTranslation();
  return (
    <div data-testid="page-404">
      <Helmet>
        <title>{t('404.title')}</title>
        <meta name="description" content={t('404.description')} />
      </Helmet>
      <h1 id="page-heading" css={title}>
        {t('404.title')}
      </h1>
      <p css={paragraph}>{t('404.description')}</p>
      <ul
        css={css`
          ${list};
          padding-left: 1.25rem;
        `}
      >
        <li>
          <Trans i18nKey="404.navigate_home">
            <Link to="/" css={link} />
          </Trans>
        </li>
        <li>
          <Trans i18nKey="404.go_back">
            <button type="button" onClick={history.goBack} css={button} />
          </Trans>
        </li>
      </ul>
    </div>
  );
};

export default PageNotFound;
