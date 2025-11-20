import type { InputProps } from '../types';


export interface InputRatingProps extends InputProps {
	max?: number;
	icon?: string;
	light?: boolean;
	hideReset?: boolean;
}
