import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:react-hooks/recommended'
  ),
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default eslintConfig;