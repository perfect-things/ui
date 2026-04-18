import type { Snippet } from 'svelte';
import type { ComponentProps, EventHandler } from '../types.js';

interface SvelteStore<T> {
	subscribe: (run: (value: T) => void) => () => void;
	set: (value: T) => void;
	update?: (updater: (value: T) => T) => void;
};

export type GridDataItem = {
	id: number;
	[key: string]: any;
};

export interface GridColumn {
	field: string;
	label?: string;
	width?: number | string;
	sortable?: boolean;
	total?: boolean;
	align?: 'left' | 'center' | 'right';
	/** Legacy cell renderer. Returns an HTML string; output is injected via {@html}. */
	renderer?: (item: GridDataItem) => string;
	// Svelte 5 snippet rendering the cell. Takes precedence over `renderer` when both are set.
	snippet?: Snippet<[GridDataItem]>;
}



export interface GridData extends SvelteStore<GridDataItem[]> {
	get: () => GridDataItem[];
	getById: (id: number) => GridDataItem | undefined;
	columns: SvelteStore<GridColumn[]>;
	allSelected: any;
	someSelected: any;
	sortField: any;
	sortOrder: any;

	toggleSelection: (item: GridDataItem, event?: MouseEvent, forceState?: boolean) => void;
	toggleSelectAll: (forceState?: boolean) => void;
	reset: () => void;
};



export interface GridPartProps {
	multiselect?: boolean;
	Data?: GridData
}


export interface GridProps extends ComponentProps {
	interactive?: boolean;
	round?: boolean;
	scrollContainer?: string | HTMLElement;
	scrollCorrectionOffset?: string;
	columns?: GridColumn[];
	data?: GridDataItem[];
	multiselect?: boolean;
	dblClickDelay?: number;
	sortby?: string;
	sortdir?: 'ASC' | 'DESC';
	onselect?: EventHandler;
	ondblclick?: EventHandler;
}
