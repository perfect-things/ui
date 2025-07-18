import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import copy from 'rollup-plugin-copy';

import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));


function injectScripts (html) {
	// Inject version and analytics scripts into the HTML
	const versionScript = `<script>window.UI_VERSION = '${process.env.npm_package_version}';</script>`;
	const analyticsScript = '<script defer data-domain="ui.perfectthings.dev" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';
	return html.replace('<!-- scripts-go-here -->', `${versionScript}\n${analyticsScript}`);
}


// https://vite.dev/config/
export default defineConfig(() => ({
	base: './',
	customLogger: {
		hasWarned: false,
		clearScreen: () => { },
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
			// compilerOptions: { hmr: false }
		}),
		copy({
			copyOnce: true,
			verbose: true,
			copySync: false,
			hook: 'buildStart',
			targets: [
				{ src: 'node_modules/zxcvbn/dist/zxcvbn.js', dest: 'assets' },
			],
		}),
		{
			name: 'inject-analytics',
			transformIndexHtml: { order: 'pre', handler: injectScripts }
		}
	],
	root: 'docs-src',
	publicDir: '../assets',
	build: {
		outDir: '../docs',
		cssCodeSplit: false,
		emptyOutDir: true,
		chunkSizeWarningLimit: 1000,
		sourcemap: true,
		rollupOptions: {
			input: resolve(__dirname, 'docs-src/index.html'),
			output: {
				entryFileNames: '[name].[hash].js',
				chunkFileNames: '[name].[hash].js',
				assetFileNames: '[name].[hash].[ext]'
			}
		},
	},
}));
