
export type MessageBox = {
	message?: string;
	title?: string;
	type?: string;
	buttons?: Array<{ label: string; value: string; type?: string }>;
	result?: string;
	target?: HTMLElement;
	icon?: string;
	cb?: (value: string) => void;
};
