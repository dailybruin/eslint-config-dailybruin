module.exports = {
  parser: 'pluggable-babel-eslint',
  parserOptions: {
    plugins: ['typescript'],
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: 'kentcdodds',
}
