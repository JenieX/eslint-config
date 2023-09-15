module.exports = {
  rules: {
    // Turn OFF, because it is checked by TS.
    'no-const-assign': 0,
    'no-undef': 0,
    'no-unreachable': 0,

    // Turn ON, because it is not actually checked by TS.
    'getter-return': 2,

    // Deprecated rules.
    'no-spaced-func': 0,

    'array-bracket-spacing': 1,
    'arrow-body-style': 0,
    'arrow-parens': 1,
    'arrow-spacing': 1,
    'default-case': 0,
    'eol-last': 1,
    'key-spacing': 1,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-empty': [1, { allowEmptyCatch: true }],
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'no-nested-ternary': 0,
    'no-trailing-spaces': 1,
    'object-curly-newline': 0,
    'object-property-newline': 1,
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': 1,
    'prefer-const': 1,
    'quote-props': 1,
    'semi-spacing': 1,
    'space-in-parens': 1,
    'spaced-comment': 1,

    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: ['accumulator', 'element'],
        ignorePropertyModificationsForRegex: ['[a-z]Element$'],
      },
    ],

    'no-restricted-syntax': [
      2,
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: '*',
        next: ['function', 'multiline-const', 'switch', 'try', 'while', 'for'],
      },
      {
        blankLine: 'always',
        prev: [
          'function',
          'multiline-const',
          'switch',
          'try',
          'while',
          'for',
          // After only
          'block-like',
        ],
        next: '*',
      },
    ],

    'no-implicit-coercion': [
      2,
      {
        string: false,
        number: true,
        boolean: true,
        disallowTemplateShorthand: false,
      },
    ],

    'prefer-destructuring': [
      2,
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
  },
};
