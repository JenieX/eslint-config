module.exports = {
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    './rules/typescript',
    './rules/import',
    './rules/unicorn',
    './rules/standard',

    /**
     * LOL, should probably be after `inline-js`, but it seems to work. Requires
     * `@html-eslint/eslint-plugin`.
     */
    // './rules/html'

    /** Should always be after typescript rules. */
    './rules/inline-script',

    './rules/ignore',
    './rules/testing',
    './rules/user-script',
  ],
};

// The command to print/write the config that will be used for a `file.js`.
// node_modules/.bin/eslint --print-config file.js  > outFile.json
