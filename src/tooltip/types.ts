import type { AlignmentDirection, ComponentProps } from '../types';

export interface TooltipProps extends ComponentProps {
	target?: string;
	offset?: number | string;
	delay?: number | string;
	position?: AlignmentDirection;
	shortcut?: string;

	info?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
}
