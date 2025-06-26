import type { ComponentProps } from '../types';

export type TagColor = 'info' | 'warning' | 'danger' | 'success' | (string & {});

export interface TagProps extends ComponentProps {
	round?: boolean;
	icon?: string;
	color?: TagColor;
	clickable?: boolean;
}
