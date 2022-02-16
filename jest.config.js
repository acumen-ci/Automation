module.exports = {
  moduleNameMapper: {
    "^node:(.*)$": "$1"
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  watchPathIgnorePatterns: [
    'test-report.html',
    './node_modules',
    './cypress',
    './testing-helpers',
    './test.ts'
  ],
};
