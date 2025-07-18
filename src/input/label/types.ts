import type { ClassValue } from 'svelte/elements';


export interface LabelProps {
	class?: ClassValue;
	for?: string;
	label?: string;
	disabled?: boolean;
	element?: HTMLElement;
}
