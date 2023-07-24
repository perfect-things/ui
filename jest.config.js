export default {
	rootDir: './',
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.js$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(vanillajs-datepicker)/)',
	],
	moduleFileExtensions: ['js', 'svelte'],
	extensionsToTreatAsEsm: ['.svelte', '.ts'],
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
