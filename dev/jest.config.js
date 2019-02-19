module.exports = {
    verbose: true,
    preset: 'react-native',
    roots: [ "<rootDir>"],
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
    transformIgnorePatterns: ["!node_modules/react-runtime"],
    moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json", "node" ],
    transform: { "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js" },
    setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
    snapshotSerializers: ["<rootDir>/node_modules/enzyme-to-json/serializer"]
  }