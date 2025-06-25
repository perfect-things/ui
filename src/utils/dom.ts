/**
 * Gets the X coordinate from a mouse or touch event.
 * @param {MouseEvent | TouchEvent} e - The mouse or touch event
 * @returns {number} The X coordinate of the event
 * @example
 * getMouseX(clickEvent) // 150
 * getMouseX(touchEvent) // 200
 */
export function getMouseX (e: any): number {
	return (e.type.includes('touch')) ? e.changedTouches[0].clientX : e.clientX;
}

/**
 * Gets the Y coordinate from a mouse or touch event.
 * @param {MouseEvent | TouchEvent} e - The mouse or touch event
 * @returns {number} The Y coordinate of the event
 * @example
 * getMouseY(clickEvent) // 100
 * getMouseY(touchEvent) // 250
 */
export function getMouseY (e: any): number {
	return (e.type.includes('touch')) ? e.changedTouches[0].clientY : e.clientY;
}

/**
 * Gets both X and Y coordinates from a mouse or touch event.
 * @param {MouseEvent | TouchEvent} e - The mouse or touch event
 * @returns {[number, number]} A tuple containing [x, y] coordinates
 * @example
 * getMouseXY(clickEvent) // [150, 100]
 * getMouseXY(touchEvent) // [200, 250]
 */
export function getMouseXY (e: any): [number, number] {
	return [getMouseX(e), getMouseY(e)];
}


/**
 * Checks if a DOM node is horizontally scrollable.
 * @param {Element} node - The DOM element to check
 * @returns {boolean} True if the element is scrollable horizontally, false otherwise
 */
function isScrollable (node: Element): boolean {
	const css = getComputedStyle(node, null);
	const overflow = css.overflowX || css.overflow;
	if (!/(auto|scroll)/.test(overflow)) return false;
	return (node.scrollWidth > node.clientWidth);
}

/**
 * Checks if any parent element is scrollable
 * Useful for determining if an element can start a swipe gesture.
 * @param {HTMLElement | SVGElement} node - The element to check along with its parents
 * @returns {boolean} True if the element or any parent is scrollable, false otherwise
 * @example
 * isInScrollable(divElement) // true if div or parent can scroll
 * isInScrollable(buttonElement) // false if no scrollable parents
 */
export function isInScrollable (node: HTMLElement | SVGElement): boolean {
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) return false;
	if (isScrollable(node)) return true;

	let parent = node.parentElement;
	while (parent) {
		if (isScrollable(parent)) return true;
		parent = parent.parentElement;
	}
	return false;
}
