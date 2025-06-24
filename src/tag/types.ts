import type { ComponentProps } from '../types';


export interface TagProps extends ComponentProps {
	round?: boolean;
	icon?: string;
	color?: 'info' | 'warning' | 'danger' | 'success' | string;
	clickable?: boolean;
}
