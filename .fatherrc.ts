export default {
  target: 'node',
  preCommit: {
    eslint: true,
    prettier: true,
  },
  cjs: { type: 'babel', minify: true },
  // disableTypeCheck: true,
  pkgs: ['components'],
  extractCSS: true,

  // For replacement __VERSION__ pkg.version
  extraBabelPlugins: [
    'version',
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    [
      'babel-plugin-import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@ant-design/icons',
        camel2DashComponentName: false,
        customName: (transformedMethodName) => {
          if (transformedMethodName === 'default') {
            return '@ant-design/icons/es/components/Icon';
          }
          return `@ant-design/icons/es/icons/${transformedMethodName}`;
        },
      },
      '@ant-design/icons',
    ],
  ],
};
