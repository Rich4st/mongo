module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
    extraFileExtensions: ['.json'],
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: "@antfu",
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '**/*.json'],
  rules: {
  },
};
