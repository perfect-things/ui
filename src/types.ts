
// Basic event handler types
export type EventHandler<T = Event> = (e: T) => void | Promise<void>;


// Utility types
export type AnyFunction = (...a: any[]) => any;
export type AnyObject = Record<string, any>;


// Base component props
export interface BaseProps {
	[key: string]: any;
}


// Base input props
export interface BaseInputProps extends BaseProps {
	id?: string;
	name?: string;
	value?: any;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	autoFocus?: boolean;

	onChange?: EventHandler<HTMLInputElement>;
	onFocus?: EventHandler<HTMLInputElement>;
	onBlur?: EventHandler<HTMLInputElement>;
	onKeyDown?: EventHandler<KeyboardEvent>;
	onKeyUp?: EventHandler<KeyboardEvent>;
	onClick?: EventHandler<MouseEvent>;
}
