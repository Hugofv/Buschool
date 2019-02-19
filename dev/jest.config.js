module.exports = {
    verbose: true,
    preset: 'react-native',
    roots: [ "<rootDir>"],
    transform: { "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js" },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
    moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json", "node" ],
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    transformIgnorePatterns: ["!node_modules/react-runtime"],
  }