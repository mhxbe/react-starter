import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="page-about">
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content="About..." />
        <link rel="canonical" href={location.origin + location.pathname} />
      </Helmet>
      <h1
        id="page-heading"
        className="color-text text-xl sm:text-3xl font-bold leading-none border-b-2 border-cyan mb-4 pb-4 sm:mb-5 sm:pb-5"
      >
        {t('about.title')}
      </h1>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum
        adipisci quis in modi aperiam error rem harum nisi, facilis corrupti
        blanditiis, necessitatibus temporibus sapiente corporis delectus earum.
        Vel, alias.
      </p>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        Sequi, inventore possimus! Hic eveniet iure repellendus eius doloribus
        labore at, nobis, sed soluta, quia dolores? Mollitia molestias odit est
        minima officiis. Consectetur suscipit iure eligendi veniam, minus amet.
      </p>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        Earum dolorum possimus adipisci quidem debitis libero amet nobis, beatae
        placeat reiciendis, odit enim necessitatibus. Officiis, quae tempora
        consectetur cupiditate accusantium aperiam voluptate repudiandae,
        recusandae repellat voluptatem corrupti ab consequatur.
      </p>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        Error, tempora maxime totam optio officia ad, deserunt repudiandae
        minima enim neque est sed! Ad nulla est quod? Ea ex rem sit. Autem
        mollitia atque ipsam quo incidunt, iusto debitis corporis provident
        aliquid commodi cum rerum blanditiis reprehenderit hic alias. Commodi
        nulla sit aperiam.
      </p>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
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
