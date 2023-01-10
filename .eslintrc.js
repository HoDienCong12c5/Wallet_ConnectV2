module.exports = {
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb-base',
  ],
  rules: {
    'no-undef': 'error',
    quotes: ['error', 'single'],
    'space-in-brackets': ['off', 'always'],
    'linebreak-style': 'off',
    'no-unused-expressions': 'off',
    'max-len': ['error', { code: 200 }],
    semi: 0,
    'comma-dangle': ['off', 'always-multiline'],
    'react-native/split-platform-components': 0,
    // 'no-unused-vars': 0,
    // 'react-native/no-unused-styles': 2,
    // 'react-native/split-platform-components': 2,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  env: {
    jest: true,
  },
};
