import * as React from 'react';
import {
  ResetCss,
  Header,
  Title,
  Main,
  Content,
  Paragraph,
  CopyRight,
} from './App.styles';

import Sidebar from './common/Sidebar';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      <ResetCss />
      <Header>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide' : 'Open'}
        </button>
        <Title>mhxbe/react-starter</Title>
      </Header>
      <Main role="main">
        <Sidebar open={isOpen} onToggle={setIsOpen} />
        <Content>
          <Paragraph>
            This is an opinionated starter-kit for quickly bootstrapping
            client-side React projects written in TypeScript. Support for
            Progressive Web Apps (PWA) is powered by{' '}
            <a
              href="https://developers.google.com/web/tools/workbox"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Workbox
            </a>
            . You can find this starterkit at{' '}
            <a
              href="https://github.com/mhxbe/react-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mhxbe/react-starter
            </a>
            .
          </Paragraph>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            laborum adipisci quis in modi aperiam error rem harum nisi, facilis
            corrupti blanditiis, necessitatibus temporibus sapiente corporis
            delectus earum. Vel, alias.
          </Paragraph>
          <Paragraph>
            Sequi, inventore possimus! Hic eveniet iure repellendus eius
            doloribus labore at, nobis, sed soluta, quia dolores? Mollitia
            molestias odit est minima officiis. Consectetur suscipit iure
            eligendi veniam, minus amet.
          </Paragraph>
          <Paragraph>
            Earum dolorum possimus adipisci quidem debitis libero amet nobis,
            beatae placeat reiciendis, odit enim necessitatibus. Officiis, quae
            tempora consectetur cupiditate accusantium aperiam voluptate
            repudiandae, recusandae repellat voluptatem corrupti ab consequatur.
          </Paragraph>
        </Content>
        <CopyRight>&copy; 2020 Mike Henderyckx</CopyRight>
      </Main>
    </>
  );
};

export default App;
