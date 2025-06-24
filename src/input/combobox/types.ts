import type { InputProps } from '../types';

export type ComboboxListItem = {
	id?: string;
	name?: string;
	highlightedName?: string;
	idx?: number;
	group?: boolean;
};

export type ComboboxListGroup = {
	name: string;
	items: ComboboxListItem[];
};



export interface ComboboxProps extends InputProps {
	items?: any[];
	selectedItems?: any[];
	multiselect?: boolean;
	showOnFocus?: boolean;
	allowNew?: boolean;
	opened?: boolean;
	listId?: string;
	listElement?: HTMLDivElement;
	inputElement?: HTMLInputElement;
	oniconclick?: () => void;
	onclick?: () => void;
	onchange?: (e: Event, value: any, oldValue: any) => void;
}


export interface ComboboxInputProps extends InputProps {
	listId?: string;
	opened?: boolean;
	oniconclick?: (e: MouseEvent) => void;
	oniconmousedown?: (e: MouseEvent) => void;
}


export interface ComboboxListProps {
	listId?: string;
	allowNew?: boolean;
	multiselect?: boolean;
	items?: ComboboxListItem[];
	selectedItems?: ComboboxListItem[];
	opened?: boolean;
	shouldShowNewItem?: boolean;
	newItemName?: string;

	highlightIndex?: number;
	listElement?: HTMLDivElement;

	onmousedown?: () => void;
	onclick?: (e: Event, item: ComboboxListItem) => void;
}


export interface ComboboxListItemProps {
	item?: ComboboxListItem;
	multiselect?: boolean;
	selectedItems?: Array<ComboboxListItem>;
	highlightIndex?: number;
	onclick?: (e: Event, item: ComboboxListItem) => void;
}
