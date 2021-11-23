module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  roots: ["<rootDir>/"],
  collectCoverage: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@utils(.*)$": "<rootDir>/utils$1",
  },
};
