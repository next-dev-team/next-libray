export default {
  esm: { type: 'babel' },
  cjs: { type: 'babel' },
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  pkgs: [
    'components-next',
  ],
  extractCSS: true,
  extraPostCSSPlugins: [
    require('@tailwindcss/postcss7-compat'),
    require('postcss-preset-env')({ stage: 1 }),
  ],
}
