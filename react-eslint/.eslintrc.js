module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:import/errors',
      'plugin:import/warnings',
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'eslint-plugin-import',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'simple-import-sort',
      'prettier',
    ],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
  
            ['^react', '^@?\\w'],
  
            ['^\\.\\.'],
  
            ['^\\./(?=[^/]*?/)', '^\\.'],
  
            ['\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/imports-first': 'error',
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'error',
      'import/prefer-default-export': 'off',
      'import/no-named-as-default-member': 'off',
      'import/default': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/display-name': 'off',
      'no-empty': 'error',
      curly: 'error',
      'newline-before-return': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: ['function'],
          next: '*',
        },
      ],
      'sort-imports': 'off',
      'import/order': 'off',
    },
  
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  };