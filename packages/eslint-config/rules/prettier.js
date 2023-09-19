module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: ['prettier'],
      rules: {
        '@typescript-eslint/semi': 2,
      },
    },
  ],
};
