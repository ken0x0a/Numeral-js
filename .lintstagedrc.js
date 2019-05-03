module.exports = {
  '*.{ts,tsx}': [
    // './scripts/pre-commit-tsc',
    "tslint --fix --exclude '**/*.d.ts",
    'prettier --write',
    'git add',
  ],
}
