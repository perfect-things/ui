import type { AlignmentDirection, ComponentProps, EventHandler } from '../types';


export interface PopoverProps extends ComponentProps {
	offset?: string | number;
	contentEl?: HTMLElement;
	position?: AlignmentDirection;
	hideTip?: boolean;
	dontHideOnTargetClick?: boolean;
	setMinWidthToTarget?: boolean;
	onopen?: EventHandler;
	onclose?: EventHandler;
}
