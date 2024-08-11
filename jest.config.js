module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
