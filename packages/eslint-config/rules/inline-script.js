/**
 * Important
 *
 * Including the html files explicitly under the `files` property in
 * `tsconfig.json` is required, if you want to run the TS rules that requires
 * type information. It turned out, these rules don't actually work well.
 *
 * What I did is just disable these rules all together, and settle for
 * `@ts-check` at the top of the inline script. `@ts-check` comment should be
 * present in all inline scripts to have proper checking.
 *
 * https://typescript-eslint.io/linting/troubleshooting/
 * https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/130
 */

module.exports = {
  plugins: ['html'],
  overrides: [
    {
      files: ['*.html'],
      // parser: '@html-eslint/parser',

      // Next two properties are important and also needed for the `html` rules.
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        // Some rules that they probably didn't add yet.
        '@typescript-eslint/consistent-type-assertions': 0,
      },
    },
  ],
};
