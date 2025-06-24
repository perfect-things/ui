import type { ComponentProps, EventHandler } from '../types';


export interface TableProps extends ComponentProps {
	selectable?: boolean;
	round?: boolean;
	scrollContainer?: string | HTMLElement;
	scrollCorrectionOffset?: number | string;
	rowSelector?: string;
	data?: Record<string, any>;
	onselect?: EventHandler;
	ondblclick?: EventHandler;
}
