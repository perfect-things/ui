import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				compatibility: { componentApi: 4 },
			},
			hot: false,
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./tests/_setup.js'],
		include: [
			'tests/**/*.spec.js'
		],
		css: {
			modules: {
				classNameStrategy: 'non-scoped'
			}
		},
		coverage: {
			provider: 'v8', // or 'istanbul'
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './coverage',
			include: [
				'src/**/*.{js,svelte}'
			],
			exclude: [
				'src/**/index.js',
				'src/icon/icons.js',
			],
			// thresholds: {
			// 	global: {
			// 		branches: 70,
			// 		functions: 75,
			// 		lines: 80,
			// 		statements: 80
			// 	}
			// }
		}
	},
	define: {
		'process.browser': true,
		'process.env.NODE_ENV': '"test"'
	},
	resolve: {
		conditions: ['browser']
	}
});
