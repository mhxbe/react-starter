import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Title, Paragraph } from '../App.styles';

const ErrorFallback = ({
  resetErrorBoundary,
  error,
}: FallbackProps): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <div data-testid="error-fallback-component">
      <Title id="page-heading">{t('errorBoundary.title')}</Title>
      <Paragraph>{t('errorBoundary.errorDescription')}</Paragraph>
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
