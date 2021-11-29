export default {
  target: 'node',
  preCommit: {
    eslint: true,
    prettier: true,
  },
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
    minify: true,
  },
  // For replacement __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  // disableTypeCheck: true,
  pkgs: ['components'],
  extractCSS: true,
  extraPostCSSPlugins: [
    require('@tailwindcss/postcss7-compat'),
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
