import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({ hot: false, })
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./tests/_setup.ts'],
		include: [
			'tests/**/*.test.ts',
			'tests/**/*.svelte.test.ts',
		],
		css: { modules: { classNameStrategy: 'non-scoped' } },
		coverage: {
			provider: 'v8',
			reporter: ['text', 'text-summary', 'json', 'html'],
			reportsDirectory: './coverage',
			include: [
				'src/**/*.{js,ts,svelte}'
			],
			exclude: [
				'**/*types.ts',
				'**/*.d.ts'
			],
			thresholds: {
				global: {
					branches: 70,
					functions: 75,
					lines: 80,
					statements: 80
				}
			}
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
