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



export function initKeyboardTracking (cls: string) {
	const keys = ['Escape', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'];

	const setKeyboardMode = () => document.documentElement.classList.add(cls);
	const unsetKeyboardMode = () => document.documentElement.classList.remove(cls);
	const isKey = (key) => keys.includes(key);

	const onkeydown = (e) => { if (isKey(e.key)) setKeyboardMode(); };

	window.addEventListener('keydown', onkeydown, { passive: true, capture: true });
	window.addEventListener('mousedown', unsetKeyboardMode, { passive: true, capture: true });
	window.addEventListener('pointerdown', unsetKeyboardMode, { passive: true, capture: true });
	window.addEventListener('touchstart', unsetKeyboardMode, { passive: true, capture: true });
}
