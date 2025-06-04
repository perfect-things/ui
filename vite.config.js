import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import copy from 'rollup-plugin-copy';

import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));


// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	base: './',
	plugins: [
		svelte({
			compilerOptions: {
				compatibility: { componentApi: 4 },
				hmr: false
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
		{
			name: 'inject-analytics',
			transformIndexHtml: {
				enforce: 'pre',
				transform (html) {
					const analyticsScript = '<script defer data-domain="ui.perfectthings.dev" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';
					if (command === 'build') html = html.replace('<!-- scripts-go-here -->', analyticsScript);
					return html;
				}
			}
		}
	],
	root: 'docs-src',
	publicDir: '../docs',
	build: {
		outDir: '../docs',
		cssCodeSplit: false,
		emptyOutDir: false,
		rollupOptions: {
			input: resolve(__dirname, 'docs-src/index.html'),
			output: {
				entryFileNames: '[name].[hash].js',
				chunkFileNames: '[name].[hash].js',
				assetFileNames: '[name].[hash].[ext]'
			}
		}
	},
}));
