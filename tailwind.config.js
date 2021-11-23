
/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  // jit document: https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  theme: {
    extend: {
      inset: {
        '44%': '44%',
      },
    },

  },
  purge: [
    './packages/components/src/**/*.html',
    './packages/components/src/**/*.tsx',
    './packages/components/src/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  variants: {},

};
