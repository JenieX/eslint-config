module.exports = {
  rules: {
    // Turn OFF, because it is checked by TS.
    'import/no-unresolved': 0,

    'import/extensions': [2, 'ignorePackages', { ts: 'never' }],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
  },
};
