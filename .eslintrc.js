module.exports = {
  extends: 'next/core-web-vitals',
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'prefer-arrow-functions',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',

    // import sorting
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$'],
          ['^@?\\w'],
          ['^app'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // general
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'error',
    'import/no-anonymous-default-export': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'export' }, // empty line before export
    ],
    'newline-before-return': 'error',

    // typescript
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    // React
    'react/destructuring-assignment': 'error',
    'react/self-closing-comp': ['error'],
  },
};
