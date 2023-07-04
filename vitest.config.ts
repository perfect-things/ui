import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({ hot: !process.env.VITEST }),
	],
	test: {
		globals: true,
		// watch: false,
		root: './',
		include: ['tests/**/*.spec.js'],
		exclude: ['**/node_modules/**', 'dist/*', 'docs/**'],
		environment: 'jsdom',
		setupFiles: './tests/helpers/test-setup.ts',
	},
});
