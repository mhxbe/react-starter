/** @jsx jsx */
import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { paragraph, title } from '../App.styles';

const ErrorFallback = ({
  resetErrorBoundary,
  error,
}: FallbackProps): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <div data-testid="error-fallback-component">
      <h1 id="page-heading" css={title}>
        {t('errorBoundary.title')}
      </h1>
      <p css={paragraph}>{t('errorBoundary.errorDescription')}</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>
        {t('errorBoundary.buttonTryAgain')}
      </button>
    </div>
  );
};

export const errorHandler = (error: Error): Error => {
  console.debug('Do something with following error:', error.message);
  return error;
};

export default ErrorFallback;
