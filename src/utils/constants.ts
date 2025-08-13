export const FOCUSABLE_SELECTOR = [
	'a[href]:not([disabled])',
	'button:not([disabled])',
	'iframe:not([disabled])',
	'input:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[contentEditable]',
	'[tabindex]:not(.focus-trap)', // warning: this will try to focus tabindex="-1" elements
].join(',');


export const DEFAULT_ANIMATION_SPEED = 200;
