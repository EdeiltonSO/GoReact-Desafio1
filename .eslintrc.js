module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    document: true,
  },
};
