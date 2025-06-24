import type { ComponentProps } from '../types.js';

export type DataItem = {
	id: number;
	selected?: boolean;
	field?: string;
};


export type DataStoreType = {
	subscribe: (run: (value: DataItem[]) => void) => () => void;
	set: (value: DataItem[]) => void;
	get: () => DataItem[];
	columns: any;
	allSelected: any;
	someSelected: any;
	sortField: any;
	sortOrder: any;

	toggleSelection: (item: DataItem, event?: MouseEvent, forceState?: boolean) => void;
	toggleSelectAll: (forceState?: boolean) => void;
	reset: () => void;
};




export interface GridProps extends ComponentProps {
	interactive?: boolean;
	round?: boolean;
	scrollContainer?: string | HTMLElement;
	scrollCorrectionOffset?: string;
	columns?: Array<any>;
	data?: DataItem[];
	multiselect?: boolean;
	dblClickDelay?: number;
	onselect?: (event: { event: Event, selectedItem: Element }) => void;
	ondblclick?: (event: { event: Event, selectedItem: Element }) => void;
}
