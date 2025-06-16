
function isActiveElement (element) {
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
	if (skipEventFor.includes(element.tagName)) return true;
}

function isInsidePopup (element) {
	const skipEventIfInside = '.dialog,.drawer,.popover,.menu';
	return element.closest(skipEventIfInside);
}


// ignores navigation when event happened inside a form control
// or inside dialog, drawer, popover, menu
export function shouldSkipNav (e, element) {
	const target = e && e.target;
	if (!target || target === document) return false;
	const notInElem = !element || !element.contains(target);
	return (notInElem || isActiveElement(target) || isInsidePopup(target));
}


/**
 * Finds all selectable rows in all tables on the page.
 */
export function getSelectableItems (element) {
	const rootEl = element.parentElement || document;
	const rows = rootEl.querySelectorAll('.table tbody');
	if (rows && rows.length) return Array.from(rows);
	return [];
}


/**
 * Returns the scroll container element.
 * @param element - The main grid element
 * @param scrollContainer - Element or selector of the grid container that is scrollable (if passed by the consumer)
 * @returns {HTMLElement}
 */
export function getScrollContainer (element, scrollContainer) {
	let scrollEl = element;
	if (scrollContainer) {
		if (typeof scrollContainer === 'string') scrollEl = element.closest(scrollContainer);
		else scrollEl = scrollContainer;
	}
	return scrollEl.scrollTo ? scrollEl : null;
}


/**
 * Returns the height of the title + thead section of the grid.
 * @param element - The main grid element
 * @returns {number}
 */
export function getHeaderHeight (element) {
	if (!element) return 0;
	const _title = element.querySelector('.grid-title');
	const titleHeight = _title ? _title.offsetHeight : 0;
	const head = element.querySelector('thead');
	const headHeight = head ? head.offsetHeight : 0;
	return headHeight + titleHeight;
}
