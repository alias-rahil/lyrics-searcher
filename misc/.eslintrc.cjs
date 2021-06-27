module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/extensions": ["error", "never"],
    "tsdoc/syntax": "warn",
  },
  plugins: ["eslint-plugin-tsdoc"],
  env: {
    mocha: true,
  },
};
