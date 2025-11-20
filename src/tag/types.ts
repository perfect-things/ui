import type { ComponentProps, RoleType } from '../types';

export type TagColor = RoleType | (string & {});

export interface TagProps extends ComponentProps {
	round?: boolean;
	icon?: string;
	color?: TagColor;
	clickable?: boolean;
}
