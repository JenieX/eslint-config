module.exports = {
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: ['user.js'],
      extends: ['prettier'],
      rules: {
        '@typescript-eslint/semi': 2,
      },
    },
  ],
};
