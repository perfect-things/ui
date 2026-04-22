import { defineConfig, type UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));


function injectScripts (html) {
	// Inject version and analytics scripts into the HTML
	const versionScript = `<script>window.UI_VERSION = '${process.env.npm_package_version}';</script>`;
	const analyticsScript = '<script defer data-domain="ui.perfectthings.dev" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';
	return html.replace('<!-- scripts-go-here -->', `${versionScript}\n${analyticsScript}`);
}


// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	server: { host: 'localhost' },
	css: { devSourcemap: true },
	base: './',
	plugins: [
		svelte({
			configFile: resolve(__dirname, 'svelte.config.ts')
		}),
		command === 'build' && {
			name: 'inject-analytics',
			transformIndexHtml: { order: 'pre', handler: injectScripts }
		}
	],
	root: 'docs',
	publicDir: '../assets',
	build: {
		outDir: '../public',
		emptyOutDir: true,
		cssCodeSplit: false,
		chunkSizeWarningLimit: 1000,
		sourcemap: true,
		rollupOptions: {
			input: resolve(__dirname, 'docs/index.html'),
			output: {
				entryFileNames: '[name].[hash].js',
				chunkFileNames: '[name].[hash].js',
				assetFileNames: '[name].[ext]'
			}
		},
	},
} as UserConfig));
