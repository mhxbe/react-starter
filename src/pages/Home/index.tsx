import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useErrorHandler } from 'react-error-boundary';
import { Paragraph, Title, SubTitle, Anchor } from '../../App.styles';

const Home: React.FC = () => {
  const handleError = useErrorHandler();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="An opinionated starter-kit for quickly bootstrapping client-side React projects written in TypeScript."
        />
      </Helmet>
      <Title>React Starterkit Template</Title>
      <Paragraph>
        This is an opinionated starter-kit for quickly bootstrapping client-side
        React projects written in TypeScript.
      </Paragraph>
      <Paragraph>
        Support for Progressive Web Apps (PWA) is powered by{' '}
        <Anchor
          href="https://developers.google.com/web/tools/workbox"
          title="This is a link to Google's Workbox project.s"
        >
          Google Workbox
        </Anchor>
        .
      </Paragraph>
      <Paragraph>
        You can find this starterkit at{' '}
        <Anchor
          href="https://github.com/mhxbe/react-starter"
          title="This is a link to Mike's react starterkit Github page."
        >
          github.com/mhxbe/react-starter
        </Anchor>
        .
      </Paragraph>
      <SubTitle>Error Boundary</SubTitle>
      <Paragraph>
        Here is an example of a React Error Boundary. Click the following button
        to trigger it.
      </Paragraph>
      <button onClick={() => handleError(new Error('Example error'))}>
        Trigger error (react-error-boundary)
      </button>
    </>
  );
};

export default Home;
