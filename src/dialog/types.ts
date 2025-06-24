import type { Snippet } from 'svelte';
import type { ComponentProps } from '../types';

export interface DialogProps extends ComponentProps {
	opened?: boolean;
	skipFirstFocus?: boolean;
	modal?: boolean;
	footer?: Snippet;
	onopen?: () => void;
	onclose?: () => void;
}
