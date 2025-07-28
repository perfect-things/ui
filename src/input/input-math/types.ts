import type { InputProps } from '../types';

export interface InputMathProps extends InputProps {
	separator?: string;
	precision?: number;
	inputElement?: HTMLInputElement;
}
