import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default config;
