import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


// renaming to svelte.config.ts requires node flag for node < 24
// NODE_OPTIONS=--experimental-strip-types

export default {
	// https://svelte.dev/docs#compile-time-svelte-preprocess
	preprocess: vitePreprocess(),

	// to enable ts compiler to output code (e.g. for enums):
	// preprocess: vitePreprocess({ script: true }),

	compilerOptions: {}
};
