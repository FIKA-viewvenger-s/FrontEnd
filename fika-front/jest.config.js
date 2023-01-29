const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  collectCoverageFrom: ["src/*/.@(j|t)s?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(jestConfig);
