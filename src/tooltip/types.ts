import type { ComponentProps } from '../types';

export interface TooltipProps extends ComponentProps {
	target?: string;
	offset?: number | string;
	delay?: number | string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	shortcut?: string;

	info?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
}
