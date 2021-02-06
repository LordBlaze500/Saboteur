module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts'],
                moduleDirectory: ['node_modules'],
            },
        },
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "no-return-await": "off",
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-readonly": ["error"],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error"],
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error"],
        '@typescript-eslint/no-var-requires': 0,
    }
}