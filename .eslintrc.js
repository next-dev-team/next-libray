module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    // your rules
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-undef":0,
    "@typescript-eslint/consistent-type-imports":0,
    "react/no-array-index-key":0
  },
};
