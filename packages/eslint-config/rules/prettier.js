module.exports = {
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: ['dummy.js', 'user.js'],
      extends: ['prettier'],
      rules: {
        '@typescript-eslint/semi': 2,
      },
    },
  ],
};
