module.exports = {
  overrides: [
    {
      files: ['testing.*.js', 'testing.*.ts'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 0,
        'prefer-const': 0,
      },
    },
  ],
};
