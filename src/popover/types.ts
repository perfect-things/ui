import type { ComponentProps } from '../types';


export interface PopoverProps extends ComponentProps {
	offset?: string | number;
	contentEl?: HTMLElement;
	position?: 'top' | 'bottom' | 'left' | 'right';
	hideTip?: boolean;
	dontHideOnTargetClick?: boolean;
	setMinWidthToTarget?: boolean;
	onopen?: (event: { event: Event, target: EventTarget }) => void;
	onclose?: (event: { target: EventTarget }) => void;
}
