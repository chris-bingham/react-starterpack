/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  roots: ["<rootDir>/src"],
};
