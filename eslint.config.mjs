export default {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12, // Altere conforme necessário para a versão mais recente do ECMAScript suportada pelo seu projeto
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'max-len': ['error', {code: 80}]
  }
};
