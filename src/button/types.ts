import type { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
	// button types
	info?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
	submit?: boolean;

	// button styles
	outline?: boolean;
	link?: boolean;
	text?: boolean;
	round?: boolean;

	icon?: string;
	[key: string]: any;
}
