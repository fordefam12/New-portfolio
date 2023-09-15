/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es2020: true }, // Make sure this matches your target environment.
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Specify a specific ECMAScript version or use the default.
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2', // Update to match your React version.
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // "react/prop-types": "off", // Uncomment this line if you want to disable PropTypes checking.
  },
};
