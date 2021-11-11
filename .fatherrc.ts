export default {
  esm: false,
  cjs: { type: 'babel', lazy: true },
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  pkgs: ['components'],
  extractCSS: true,
  extraPostCSSPlugins: [
    require('@tailwindcss/postcss7-compat'),
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
