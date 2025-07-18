declare global {
	interface Element {
		focus(): void;
		dataset: DOMStringMap;
		style: CSSStyleDeclaration;
		offsetTop: number;
		offsetHeight: number;
	}

	interface EventTarget {
		focus(): void;
		contains(element: Element): boolean;
		closest: (selector: string) => Element | null;
		tagName: string;
	}
}


declare global {
	interface Window {
		zxcvbn?: ZxcvbnLib;
		UI_VERSION?: string;
		longPressEventInitialised?: boolean;
	}
}


export {};
