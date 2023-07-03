export default {
	rootDir: './',
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jester',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(vanillajs-datepicker)/)',
	],
	moduleFileExtensions: ['js', 'svelte'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect'
	],
	coveragePathIgnorePatterns: [
		'coverage',
		'tests/helpers',
		'index.js',
		'icons.js',
	]
};
