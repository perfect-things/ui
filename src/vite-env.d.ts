import 'svelte';
/// <reference types="vite/client" />


// Allow any Svelte component to be imported without strict typing during migration
declare module '*.svelte' {
	import type { ComponentType, SvelteComponent } from 'svelte';
	const component: ComponentType<SvelteComponent>;
	export default component;
}

// Allow importing CSS files
declare module '*.css' {
	const content: string;
	export default content;
}

// Allow importing JSON files
declare module '*.json' {
	const content: any;
	export default content;
}

// Vite environment
interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	// Add more env variables here as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
