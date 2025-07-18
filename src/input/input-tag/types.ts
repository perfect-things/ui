import type { InputProps } from '../types';


export interface TagItem {
	text: string;
	disabled: boolean;
}

export interface InputTagProps extends InputProps {
	tags?: string[];
	boxElement?: HTMLDivElement;
	listElement?: HTMLDivElement;
}
