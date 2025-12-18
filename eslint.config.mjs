import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.mjs';

export default [
  { ignores: ['build/**', 'test/**'] },
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  }),
];
