
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
