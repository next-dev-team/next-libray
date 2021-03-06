import { defineConfig } from 'dumi';
import path from 'path';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  styles: ['./global.css', `./tailwindProd.css`],
  scripts: [
    !isProd
      ? 'https://cdn.tailwindcss.com'
      : 'https://raw.githubusercontent.com/next-dev-team/next-libray/master/tailwindProd.css',
  ],
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/next-dev-team/next-libray' },
      { title: 'Npm', path: 'https://www.npmjs.com/package/components-next' },
    ],
  },
  metas: [
    {
      property: 'og:site_name',
      content: 'ProComponents',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content: 'https://procomponents.ant.design/icon.png',
    },
    {
      property: 'og:description',
      content: '🏆 让中后台开发更简单',
    },
    {
      name: 'keywords',
      content: '中后台,admin,Ant Design,ant design,Table,react,alibaba',
    },
    {
      name: 'description',
      content: '🏆 让中后台开发更简单 包含 table form 等多个组件。',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#1890ff',
    },
  ],
  alias: {
    'components-next': path.resolve(__dirname, 'packages', 'components', 'src', 'index.ts'),
    'components-layout': 'packages/components/src/utils/layout.tsx',
  },
  targets: {
    chrome: 85,
    firefox: 85,
    safari: false,
    edge: false,
    ios: false,
  },
  ignoreMomentLocale: true,
  title: 'Components Next',
  mode: 'site',
  exportStatic: {},
  dynamicImport: {},
  // For replacement__VERSION__ pkg.version
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
  // ssr: isProd && {},
  hash: true,
  // locales: [['en-US']],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  //The mobile component library needs it, it can be deleted if it is not needed, and the dumi-theme-mobile in the package can be deleted if it is not needed.
  // theme: {
  //   '@hd': '0.02rem',
  // },

  esbuild: {},
});
