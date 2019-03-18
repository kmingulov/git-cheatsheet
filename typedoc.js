module.exports = {
  out: './docs',

  includes: './src',
  exclude: [
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/__snapshots__/*'
  ],

  mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true
};

