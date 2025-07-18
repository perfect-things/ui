import type { ComponentProps } from '../types';


export interface TreeProps extends ComponentProps {
	items?: Array<any>;
	onselect?: (event: Event, ...rest: any) => void;
}



export interface TreeNodeProps {
	item?: any;
	level?: number;
	expanded?: boolean;
	element?: HTMLElement;
}
