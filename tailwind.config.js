const plugin = require('tailwindcss/plugin');

module.exports = {
  // mode: 'jit',
  // jit document: https://tailwindcss.com/docs/just-in-time-mode
  theme: {
    extend: {
      colors: {
        primary: '#fcd535',
        dividercolor: '#e5e6eb',
      },
      fontSize: {
        base: '14px',
        sizemd: '16px',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      lineHeight: {
        initialline: '1px',
      },
    },
  },
  purge: ['./packages/components/src/**/*.html', './packages/components/src/**/*.tsx', './packages/components/src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
      backgroundOpacity: ['active'],
      borderOpacity: ['active'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
