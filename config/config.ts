
export default {
  title: 'Components Next',
  mode: 'site',
  exportStatic: {},

  // For replacement__VERSION__ pkg.version
  extraBabelPlugins: ['version',
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    [
      'babel-plugin-import',
      { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false },
      'lodash',
    ],
  ],
  ssr: process.env.NODE_ENV === "production" && {},
  hash: true,
  // locales: [['en-US']],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  //The mobile component library needs it, it can be deleted if it is not needed, and the dumi-theme-mobile in the package can be deleted if it is not needed.
  // theme: {
  //   '@hd': '0.02rem',
  // },
  // targets: {
  //   ios: 8,
  // },

  tailwindcss: {
    tailwindCssFilePath: '../packages/components/src/tailwind.css',
    tailwindConfigFilePath: 'tailwind.config.js', // Default value tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
  },
}
