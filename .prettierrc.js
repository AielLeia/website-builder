/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    'actions/',
    'data/',
    'schemas/',
    'lib/',
    'store/',
    'hooks/',
    'components/',
  ],
  importOrderSeparation: true,
};

module.exports = config;
