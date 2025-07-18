import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import { glob } from 'glob';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Get all component entry points
const componentEntries = Object.fromEntries(
	// Get all index files in component directories
	glob.sync('src/*/index.{js,ts}', { cwd: __dirname }).map(file => [
		// Create entry name from path: src/button/index.js -> button
		file.replace('src/', '').replace(/\/index\.(js|ts)$/, ''),
		resolve(__dirname, file)
	])
);

// Add utils and main index
const entries = {
	index: resolve(__dirname, 'src/index.js'),
	...componentEntries
};

// Library build configuration
export default defineConfig({
	plugins: [
		svelte({ compilerOptions: { dev: false } })
	],
	build: {
		sourcemap: true,
		emptyOutDir: true,

		lib: {
			entry: entries,
			formats: ['es']
		},
		rollupOptions: {
			// Externalize deps that shouldn't be bundled
			external: ['svelte'],
			output: {
				// Don't auto-generate globals since we're only doing ES modules
				globals: { svelte: 'Svelte' },

				chunkFileNames: 'chunks/[name]-[hash].js',
				entryFileNames: (chunk) => chunk.name === 'index' ? 'index.js' : '[name]/index.js',

				// Keep CSS separate
				assetFileNames: (asset) => {
					if (asset.names[0].endsWith('.css')) return '[name][extname]';
					return 'assets/[name]-[hash][extname]';
				},

				// Manually chunk shared dependencies
				manualChunks: (id) => {
					// Put Svelte components in the chunks directory
					if (id.includes('node_modules/svelte/')) return 'svelte-runtime';
					// Group CSS files
					if (id.includes('.css')) return 'styles';
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
});
