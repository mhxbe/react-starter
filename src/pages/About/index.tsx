import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Paragraph, Title } from '../../App.styles';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About..." />
      </Helmet>
      <Title>About</Title>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum
        adipisci quis in modi aperiam error rem harum nisi, facilis corrupti
        blanditiis, necessitatibus temporibus sapiente corporis delectus earum.
        Vel, alias.
      </Paragraph>
      <Paragraph>
        Sequi, inventore possimus! Hic eveniet iure repellendus eius doloribus
        labore at, nobis, sed soluta, quia dolores? Mollitia molestias odit est
        minima officiis. Consectetur suscipit iure eligendi veniam, minus amet.
      </Paragraph>
      <Paragraph>
        Earum dolorum possimus adipisci quidem debitis libero amet nobis, beatae
        placeat reiciendis, odit enim necessitatibus. Officiis, quae tempora
        consectetur cupiditate accusantium aperiam voluptate repudiandae,
        recusandae repellat voluptatem corrupti ab consequatur.
      </Paragraph>
      <Paragraph>
        Error, tempora maxime totam optio officia ad, deserunt repudiandae
        minima enim neque est sed! Ad nulla est quod? Ea ex rem sit. Autem
        mollitia atque ipsam quo incidunt, iusto debitis corporis provident
        aliquid commodi cum rerum blanditiis reprehenderit hic alias. Commodi
        nulla sit aperiam.
      </Paragraph>
      <Paragraph>
        Esse facere enim excepturi dolorem asperiores sapiente autem debitis hic
        error? Maiores voluptates deleniti numquam autem accusantium nihil iusto
        sit cum exercitationem! Accusantium nisi labore deserunt distinctio sunt
        doloribus error qui quos obcaecati, possimus voluptatum sed doloremque
        at fuga, earum culpa est voluptas esse.
      </Paragraph>
    </>
  );
};

export default Home;
