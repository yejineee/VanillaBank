module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/', '*.config.js'],

  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'warn',
  },
};
