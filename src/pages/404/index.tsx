import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trans, useTranslation } from 'react-i18next';
import { Paragraph, Title, ButtonLink, Link, List } from '../../App.styles';

const PageNotFound: React.FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const { t } = useTranslation();
  return (
    <div data-testid="page-404">
      <Helmet>
        <title>{t('404.title')}</title>
        <meta name="description" content={t('404.description')} />
      </Helmet>
      <Title id="page-heading">{t('404.title')}</Title>
      <Paragraph>{t('404.description')}</Paragraph>
      <List>
        <li>
          <Trans i18nKey="404.navigate_home">
            <Link to="/" />
          </Trans>
        </li>
        <li>
          <Trans i18nKey="404.go_back">
            <ButtonLink type="button" onClick={history.goBack} />
          </Trans>
        </li>
      </List>
    </div>
  );
};

export default PageNotFound;
