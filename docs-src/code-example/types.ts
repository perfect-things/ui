import type { Snippet } from 'svelte';


export interface CodeProps {
	lang?: string;
	notitle?: boolean;
	nohr?: boolean;
	children?: Snippet;
}


export interface CodeBoxProps {
	tag?: string;
	props?: Record<string, any>;
	text?: string;
}



export interface JsonBoxProps {
	value?: string | object;
}
