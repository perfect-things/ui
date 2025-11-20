import type { ComponentProps, RoleType } from '../types';


export interface InfoBarProps extends ComponentProps {
	msg: string;
	type?: RoleType;
}
