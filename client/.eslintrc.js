module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'import',
      'react',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:react/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    settings: {
      'import/resolver': {
          node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
              moduleDirectory: ['node_modules', 'src/'],
          },
      },
  }
};