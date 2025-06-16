import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// to enable ts compiler to output code (e.g. for enums):
	// preprocess: vitePreprocess({ script: true }),

	compilerOptions: {
		// Enable TypeScript support
		enableSourcemap: true,
	},

	kit: {
		typescript: {
			config: (config) => {
				config.compilerOptions.allowJs = true;
				config.compilerOptions.checkJs = false;
				return config;
			}
		}
	}
};
