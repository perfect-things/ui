import type { ComponentProps } from '../types';


export type SplitterBox = {
	width?: number;
	height?: number;
	collapsed?: boolean;
};


export interface SplitterProps extends ComponentProps {
	onchange?: (e: Event, box: SplitterBox) => void;
	onchanged?: (e: Event, box: SplitterBox) => void;
}
