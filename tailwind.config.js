const plugin = require('tailwindcss/plugin');

module.exports = {
  // mode: 'jit',
  // jit document: https://tailwindcss.com/docs/just-in-time-mode
  theme: {
    extend: {},
  },
  purge: [
    './packages/components/src/**/*.html',
    './packages/components/src/**/*.tsx',
    './packages/components/src/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  variants: {},
};
