import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import copy from 'rollup-plugin-copy';

import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));


// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	base: './',
	customLogger: {
		hasWarned: false,
		clearScreen: () => {},
		hasErrorLogged: () => false,
		error: console.error,
		info (msg) { console.info(msg); },
		warn (msg) {
			if (msg.includes('zxcvbn.js')) return;
			console.warn(msg);
		},
		warnOnce (msg) {
			if (msg.includes('prime_light-webfont')) return;
			console.warn(msg);
		}
	},
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
			copySync: false,
			hook: 'buildStart',
			targets: [
				{ src: 'node_modules/zxcvbn/dist/zxcvbn.js', dest: 'docs' },
				{ src: 'assets/*', dest: 'docs' },
			],
		}),
		{
			name: 'inject-analytics',
			transformIndexHtml: {
				order: 'pre',
				handler (html) {
					const analyticsScript = '<script defer data-domain="ui.perfectthings.dev" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';
					if (command === 'build') html = html.replace('<!-- scripts-go-here -->', analyticsScript);
					return html;
				}
			}
		}
	],
	root: 'docs-src',
	publicDir: false,
	build: {
		outDir: '../docs',
		cssCodeSplit: false,
		emptyOutDir: false,
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			input: resolve(__dirname, 'docs-src/index.html'),
			onwarn (warning, warn) {
				if (warning.code === 'EVAL') return;
				warn(warning);
			},
			output: {
				entryFileNames: '[name].[hash].js',
				chunkFileNames: '[name].[hash].js',
				assetFileNames: '[name].[hash].[ext]'
			}
		}
	},
}));
