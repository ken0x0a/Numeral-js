module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    // 'pre-commit': './scripts/pre-commit && lint-staged',
  },
}
