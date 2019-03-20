module.exports = {
  verbose: true,
  preset: "react-native",
  roots: ["<rootDir>"],
  testPathIgnorePatterns: ["lib/", "node_modules/"],
  transformIgnorePatterns: ["!node_modules/react-runtime"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"]
};
