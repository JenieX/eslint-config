module.exports = {
  overrides: [
    {
      files: ['dist/**/*.user.js'],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
      },
    },
  ],
};
