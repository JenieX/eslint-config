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
    './rules/ignore',
    './rules/testing',
    './rules/user-script',
    './rules/prettier',
  ],
};

// The command to print/write the config that will be used for a `file.js`.
// node_modules/.bin/eslint --print-config file.js  > outFile.json
