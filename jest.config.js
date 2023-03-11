export default {
	rootDir: '.',
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svg$': './tests/helpers/svgTransform.js',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(vanillajs-datepicker)/)'
	],
	moduleFileExtensions: ['js', 'svelte'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect'
	]
};
