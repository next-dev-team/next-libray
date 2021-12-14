/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */

const pxToRem = (px) => {
  return `${px / 16}rem`;
};

module.exports = {
  // jit document: https://tailwindcss.com/docs/just-in-time-mode
  theme: {
    extend: {
      inset: {
        '44%': '44%',
      },
      height: {},
      minHeight: {
        '200px': pxToRem(200),
      },
      minWidth: {
        50: pxToRem(50),
      },
    },
  },
  content: [
    './packages/components/src/**/*.html',
    './packages/components/src/**/*.tsx',
    './packages/components/src/**/*.ts',
  ],
  variants: {},
};
