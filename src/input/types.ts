import type { ClassValue } from 'svelte/elements';


export interface InputProps {
	class?: ClassValue;
	id?: string;
	name?: string;
	required?: boolean;
	disabled?: boolean;
	value?: any;
	label?: string;
	error?: string;
	info?: string;
	title?: string;
	labelOnTheLeft?: boolean;
	tabindex?: number;
	placeholder?: string;
	element?: HTMLElement;
	inputElement?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
	onchange?: (e: Event, ...rest: any) => void;
	onkeydown?: (e: KeyboardEvent, ...rest: any) => void;
	onfocus?: (e: Event, ...rest: any) => void;
	onblur?: (e: Event, ...rest: any) => void;
	oninput?: (e: Event, ...rest: any) => void;
	[key: string]: any;
}
