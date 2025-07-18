import type { ComponentProps } from '../types';


export interface InfoBarProps extends ComponentProps {
	msg: string;
	type?: 'info' | 'warning' | 'error' | 'success';
}
