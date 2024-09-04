export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': import('@typescript-eslint/eslint-plugin'),
      'react': import('eslint-plugin-react'),
    },
    rules: {
      'no-unused-vars': 'warn',   // Warn instead of error for unused variables
      'semi': ['error', 'always'], // Ensure semicolons are always used
      '@typescript-eslint/explicit-function-return-type': 'off', // Turn off explicit return type requirement
      'react/prop-types': 'off',   // Turn off prop-types checks in React components
    },
  },
];
