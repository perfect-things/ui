import type { InputProps } from '../types';

export type ButtonToggleItem = {
	name?: string,
	value: string | boolean,
	title?: string,
	icon?: string;
} | string;

export type ButtonToggleValue = ButtonToggleItem | string | boolean;


export interface ButtonToggleProps extends InputProps {
	round?: boolean;
	items?: ButtonToggleItem[];
	value?: ButtonToggleValue;
}
