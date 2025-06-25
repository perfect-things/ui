import type { Snippet } from 'svelte';
import type { ClassValue } from 'svelte/elements';

export type EventHandler = (e: Event, ...rest: any) => void;

export type AlignmentDirection = 'top' | 'bottom' | 'left' | 'right';



export interface ComponentProps {
	id?: string;
	class?: ClassValue;
	title?: string;
	disabled?: boolean;
	tabindex?: number;

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

	// allow 'data-x' attributes
	[key: `data-${string}`]: string | number | boolean | undefined;
}

// Utility types
// export type AnyFunction = (...a: any[]) => any;
// export type AnyObject = Record<string, any>;
