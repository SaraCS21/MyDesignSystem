module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-useless-escape': 'off',
    camelcase: 'off',
    'jest/no-conditional-expect': 'off',
    'import/prefer-default-export': 'off',
    'no-console': [
      1, // console.log can be commented (for debug) but will throw warning
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prettier/prettier': 'error',
  },
};
