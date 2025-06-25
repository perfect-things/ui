import type { FullAutoFill } from 'svelte/elements';
import type { ComponentProps, EventHandler } from '../types';


export interface InputProps extends ComponentProps {
	name?: string;
	required?: boolean;
	value?: any;
	readonly?: boolean;
	autofocus?: boolean;
	autocomplete?: FullAutoFill;
	maxlength?: number;
	minlength?: number;
	pattern?: string;

	label?: string;
	error?: string;
	info?: string;

	labelOnTheLeft?: boolean;
	placeholder?: string;

	inputElement?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

	onchange?: EventHandler;
	oninput?: EventHandler;
}
