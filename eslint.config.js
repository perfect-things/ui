import js from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
	js.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	{
		plugins: {
			'@stylistic/js': stylisticJs
		},
		ignores: ['docs/*'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.jest,
			}
		},
		rules: {
			'@stylistic/js/array-bracket-spacing': ['error', 'never'],
			'@stylistic/js/brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
			'@stylistic/js/comma-dangle': 0,
			'@stylistic/js/eol-last': 1,
			'@stylistic/js/function-call-spacing': ['error', 'never'],
			'@stylistic/js/indent': ['error', 'tab'],
			'@stylistic/js/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
			'@stylistic/js/lines-between-class-members': ['error', 'always'],
			'@stylistic/js/newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 3 }],
			'@stylistic/js/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/js/no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
			'@stylistic/js/no-trailing-spaces': 'error',
			'@stylistic/js/object-curly-spacing': ['error', 'always'],
			'@stylistic/js/quotes': ['error', 'single', { 'avoidEscape': true }],
			'@stylistic/js/semi': ['error', 'always'],
			'@stylistic/js/space-before-blocks': ['error', 'always'],
			'@stylistic/js/space-before-function-paren': ['error', 'always'],
			'@stylistic/js/space-in-parens': ['error', 'never'],
			'@stylistic/js/template-curly-spacing': ['error', 'never'],

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
			// 'import/no-unresolved': [2, { 'commonjs': true, 'amd': true }],
			// 'import/named': 2,
			// 'import/namespace': 2,
			// 'import/default': 2,
			// 'import/export': 2,
		}
	}
];
