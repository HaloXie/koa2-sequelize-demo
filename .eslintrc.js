module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    // Opinionated
    curly: 'error',
    eqeqeq: 'error',
    // String
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'prefer-template': 'error',
    // Spacing
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
      },
    ],
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-in-parens': 'error',
    'space-before-blocks': 'error',
    // Tenary
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    // Assign
    'no-func-assign': 'error',
    'no-class-assign': 'error',
    // TypeScript
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off', // this rule is deprecated and will update
    // Import
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object'],
      },
    ],
    'import/no-dynamic-require': 'error',
    'import/no-cycle': 'error', // this rule is comparatively computationally expensive, but it's good to have
    'import/no-useless-path-segments': 'error',
    'import/export': 'error',
    'import/no-mutable-exports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
