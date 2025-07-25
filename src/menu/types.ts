import type { ComponentProps } from '../types';


export interface MenuProps extends ComponentProps {
	type?: 'context' | undefined;
	targetSelector?: string;
	closeOnClick?: boolean;
	align?: 'left' | 'right' | 'center' | undefined;
	valign?: 'top' | 'bottom' | undefined;
	onopen?: (e: { event: Event, target: Element }) => void;
	onclose?: (e: { target: Element }) => void;
}



export interface MenuItemProps extends Omit<ComponentProps, 'onclick'> {
	shortcut?: string;
	icon?: string;

	disabled?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;

	// allow 'data-x' attributes
	[key: `data-${string}`]: string | number | boolean | undefined;

	onclick?: (e: MouseEvent, data: any) => void | boolean;
}
