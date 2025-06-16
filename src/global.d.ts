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
	}
}

export {};
