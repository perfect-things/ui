import type { ComponentProps } from '../types';

export interface PanelProps extends ComponentProps {
	open?: boolean;
	round?: boolean;
	collapsible?: boolean;

	info?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;

	onopen?: () => void;
	onclose?: () => void;
}
