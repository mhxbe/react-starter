/** @jsx jsx */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { paragraph, title } from '../../App.styles';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="page-about">
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content="About..." />
      </Helmet>
      <h1 id="page-heading" css={title}>
        {t('about.title')}
      </h1>
      <p css={paragraph}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum
        adipisci quis in modi aperiam error rem harum nisi, facilis corrupti
        blanditiis, necessitatibus temporibus sapiente corporis delectus earum.
        Vel, alias.
      </p>
      <p css={paragraph}>
        Sequi, inventore possimus! Hic eveniet iure repellendus eius doloribus
        labore at, nobis, sed soluta, quia dolores? Mollitia molestias odit est
        minima officiis. Consectetur suscipit iure eligendi veniam, minus amet.
      </p>
      <p css={paragraph}>
        Earum dolorum possimus adipisci quidem debitis libero amet nobis, beatae
        placeat reiciendis, odit enim necessitatibus. Officiis, quae tempora
        consectetur cupiditate accusantium aperiam voluptate repudiandae,
        recusandae repellat voluptatem corrupti ab consequatur.
      </p>
      <p css={paragraph}>
        Error, tempora maxime totam optio officia ad, deserunt repudiandae
        minima enim neque est sed! Ad nulla est quod? Ea ex rem sit. Autem
        mollitia atque ipsam quo incidunt, iusto debitis corporis provident
        aliquid commodi cum rerum blanditiis reprehenderit hic alias. Commodi
        nulla sit aperiam.
      </p>
      <p css={paragraph}>
        Esse facere enim excepturi dolorem asperiores sapiente autem debitis hic
        error? Maiores voluptates deleniti numquam autem accusantium nihil iusto
        sit cum exercitationem! Accusantium nisi labore deserunt distinctio sunt
        doloribus error qui quos obcaecati, possimus voluptatum sed doloremque
        at fuga, earum culpa est voluptas esse.
      </p>
    </div>
  );
};

export default About;
