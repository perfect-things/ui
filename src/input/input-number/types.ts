import type { InputProps } from '../types';

export interface InputNumberProps extends InputProps {
	min?: number;
	max?: number;
	step?: number;
	separator?: string;
	inputElement?: HTMLInputElement;
}
