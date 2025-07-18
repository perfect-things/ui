import type { ComponentProps } from '../types';

export interface DrawerProps extends ComponentProps {
	onopen?: () => void;
	onclose?: () => void;
}
