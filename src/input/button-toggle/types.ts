import type { InputProps } from '../types';

export type ButtonToggleItem = {
	name?: string,
	value: string | boolean,
	icon?: string;
} | string;

export type ButtonToggleValue = ButtonToggleItem | string | boolean;


export interface ButtonToggleProps extends InputProps {
	round?: boolean;
	items?: ButtonToggleItem[];
	value?: ButtonToggleValue;
	onchange?: (e: Event, value: ButtonToggleValue) => void;
}
