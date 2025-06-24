import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	// https://svelte.dev/docs#compile-time-svelte-preprocess
	preprocess: vitePreprocess(),

	// to enable ts compiler to output code (e.g. for enums):
	// preprocess: vitePreprocess({ script: true }),

	compilerOptions: {
		enableSourcemap: true,
	},
};
