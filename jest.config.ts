import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['./jest.setup.ts', './utils/test-util.tsx'],
  moduleNameMapper: {
    'react-i18next': '<rootDir>/__mocks__/react-i18next.tsx',
    i18next: '<rootDir>/__mocks__/i18next.ts',
  },
};

export default config;
