import type { Snippet } from 'svelte';
import type { ClassValue } from 'svelte/elements';

export type EventHandler = (e: Event, ...rest: any) => void;

export interface ComponentProps {
	id?: string;
	class?: ClassValue;
	title?: string;
	disabled?: boolean;

	element?: HTMLElement;
	children?: Snippet;

	onfocus?: EventHandler;
	onblur?: EventHandler;
	onkeydown?: EventHandler;
	onkeyup?: EventHandler;
	onmousedown?: EventHandler;
	onmouseup?: EventHandler;
	onclick?: EventHandler;
	onchange?: EventHandler;
}

export interface InputProps extends ComponentProps {
	name?: string;

	required?: boolean;
	readonly?: boolean;
	autofocus?: boolean;
	labelOnTheLeft?: boolean;

	value?: any;
	label?: string;
	error?: string;
	info?: string;
	placeholder?: string;

	element?: HTMLElement;
	inputElement?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

	onchange?: EventHandler;
	oninput?: EventHandler;
}

// Utility types
// export type AnyFunction = (...a: any[]) => any;
// export type AnyObject = Record<string, any>;
