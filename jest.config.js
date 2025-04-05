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
	collectCoverageFrom: [
		'src/**/*.{js,svelte}',
		'!src/**/index.js',
		'!src/icons.js'
	],
	coverageDirectory: 'coverage',
	coverageReporters: [
		'json',
		'lcov',
		'text',
		'clover',
		'html'
	],
	// coverageThreshold: {
	// 	global: {
	// 		branches: 70,
	// 		functions: 75,
	// 		lines: 80,
	// 		statements: 80
	// 	},
	// 	'./src/input/': {
	// 		branches: 80,
	// 		functions: 85,
	// 		lines: 90,
	// 		statements: 90
	// 	}
	// }
};
