import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Title, Paragraph } from '../App.styles';

const ErrorFallback = ({
  resetErrorBoundary,
  error,
}: FallbackProps): React.ReactElement => {
  return (
    <>
      <Title>Error</Title>
      <Paragraph>The following error occured:</Paragraph>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again.</button>
    </>
  );
};

export const errorHandler = (error: Error): Error => {
  console.debug('Do something with following error:', error.message);
  return error;
};

export default ErrorFallback;
