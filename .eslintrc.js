/* eslint-disable no-undef */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: ['ArrowFunctionExpression']
      }
    ],
    'no-trailing-spaces': 'error',
    semi: ['error', 'always'],
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'never']
  }
};
