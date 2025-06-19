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
	}
}

export {};
