import { IConfig } from '@umijs/types';
import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  // links: ['https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'],
  alias: {
    'components-next': join(__dirname, 'packages', 'components', 'src', 'index.ts'),
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

  tailwindcss: {
    tailwindCssFilePath: '../packages/components/src/tailwind.css',
    tailwindConfigFilePath: 'tailwind.config.js', // Default value tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
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
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: 'components-next',
    //     customName: (name) => {
    //       const sign = name.lastIndexOf('-');
    //       const libName = name.substring(0, sign);
    //       const fullLibName = name.substring(sign + 1, name.length);
    //       const getLibNum = fullLibName.replace(/\D/g, '');
    //       const libFolder = fullLibName.substring(0, fullLibName.lastIndexOf(getLibNum));
    //       const customName = `components-next/lib/${libFolder}/${libName}/${libName + getLibNum}`;
    //       // console.log('======>customName', customName);
    //       return customName;
    //     },
    //   },
    //   'components-next',
    // ],
  ],
  ssr: process.env.NODE_ENV === 'production' && {},
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
} as IConfig);
