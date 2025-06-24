import type { InputProps } from '../types';

export interface RangeProps extends InputProps {
	min?: number;
	max?: number;
	step?: number;
	hideTicks?: boolean;
}
