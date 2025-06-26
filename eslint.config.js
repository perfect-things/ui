import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import ts from 'typescript-eslint';


export default ts.config(
	js.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	// @ts-ignore
	...sveltePlugin.configs.recommended,
	{
		ignores: [
			'docs/**',                      // Ignore compiled output
			'dist/**',                      // Ignore compiled output
			'**/node_modules/**',           // Ignore node_modules
			'**/vanillajs-datepicker/**',   // Ignore third party modules
		]
	},
	{ plugins: { '@stylistic': stylistic } },
	{
		files: ['**/*.{svelte.js,svelte.ts,svelte}'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: ts.parser, // Use TypeScript parser for <script> blocks
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.vitest,
				$state: 'readonly', // Svelte's $state shows undefined in test files
			},
		},
		plugins: {
			svelte: sveltePlugin,
			'@typescript-eslint': ts.plugin,
		}
	},
	{
		files: ['**/*.{js,ts,mjs}'],
		languageOptions: {
			parser: ts.parser,
			parserOptions: {
				project: './tsconfig.json',
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.vitest,
			},
		},
		plugins: {
			'@typescript-eslint': ts.plugin,
		}
	},
	{
		files: ['*.js'],
		languageOptions: {
			globals: { ...globals.node, },
			ecmaVersion: 'latest',
			sourceType: 'module'
		}
	},
	{
		rules: {
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
			'@stylistic/comma-dangle': 0,
			'@stylistic/eol-last': 1,
			'@stylistic/function-call-spacing': ['error', 'never'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
			'@stylistic/lines-between-class-members': ['error', 'always'],
			'@stylistic/newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 3 }],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/space-before-blocks': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', 'always'],
			'@stylistic/space-in-parens': ['error', 'never'],
			'@stylistic/template-curly-spacing': ['error', 'never'],

			'curly': ['error', 'multi-line'],
			'dot-notation': 'error',
			'no-cond-assign': 0,
			'no-else-return': 'error',
			'no-shadow': 'error',
			'no-unneeded-ternary': 'error',
			// 'no-use-before-define': ['error', 'nofunc'], // problematic with svelte
			'prefer-arrow-callback': 'error',
			'prefer-const': ['error', { 'destructuring': 'all', 'ignoreReadBeforeAssign': false }],
			'prefer-promise-reject-errors': 'error',

			'svelte/no-at-html-tags': 0,

			'@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
			'@typescript-eslint/no-explicit-any': 'off', // Allow any types during migration
			'@typescript-eslint/ban-ts-comment': 'off',

			// disable some type-aware rules
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
		}
	}
);
