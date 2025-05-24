import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import copy from 'rollup-plugin-copy';

import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));


// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				compatibility: { componentApi: 4 },
			}
		}),
		copy({
			copyOnce: true,
			verbose: true,
			copySync: true,
			hook: 'buildStart',
			targets: [
				{ src: 'node_modules/zxcvbn/dist/zxcvbn.js', dest: 'docs' },
				{ src: 'assets/*', dest: 'docs' },
			],
		}),
	],
	root: 'docs-src',
	publicDir: '../docs',
	build: {
		outDir: '../docs',
		cssCodeSplit: false,
		emptyOutDir: false,
		rollupOptions: {
			input: resolve(__dirname, 'docs-src/index.html')
		}
	},
	server: { fs: { allow: ['..'] } },
	resolve: {
		alias: {
			// Allow importing from the src directory (your component library)
			'@': resolve(__dirname, 'src')
		}
	}
});
