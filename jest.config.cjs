module.exports = {
  testEnvironment: 'node',
  transform: {"\\.[jt]sx?$": "babel-jest"},
  moduleFileExtensions: [
    "js",
    "node",
  ],
  coverageDirectory: 'coverage'
}
