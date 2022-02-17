module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    "global": {
      // "branches": 80,
      // "functions": 80,
      "lines": 80,
      "statements": -10
    }
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
