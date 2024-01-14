export default {
	rootDir: './',
	// 10s - tests are interactive and have to wait for animations & rendering
	slowTestThreshold: 10,
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
		'@testing-library/jest-dom'
	],
	coveragePathIgnorePatterns: [
		'coverage',
		'tests/helpers',
		'index.js',
		'icons.js',
	],
};
