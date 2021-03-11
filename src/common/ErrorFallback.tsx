import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

const ErrorFallback = ({
  resetErrorBoundary,
  error,
}: FallbackProps): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <div data-testid="error-fallback-component">
      <h1
        id="page-heading"
        className="color-text text-xl sm:text-3xl font-bold leading-none border-b-2 border-cyan mb-4 pb-4 sm:mb-5 sm:pb-5"
      >
        {t('errorBoundary.title')}
      </h1>
      <p className="text-base sm:text-xl leading-normal color-text mb-5 sm:leading-relaxed last:mb-0">
        {t('errorBoundary.errorDescription')}
      </p>
      <pre className="font-mono mb-4 text-xl">{error?.message}</pre>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="bg-lightCyan border-lightGray color-text border p-3"
      >
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
