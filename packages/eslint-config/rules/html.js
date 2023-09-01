module.exports = {
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/indent': [1, 2],
        '@html-eslint/no-target-blank': 2,
        '@html-eslint/require-meta-charset': 2,
      },
    },
  ],
};
