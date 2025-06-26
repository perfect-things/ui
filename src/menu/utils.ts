/**
 *	Utility functions for managing ARIA attributes on menu elements.
 * @param el - An Element to which ARIA attributes will be added.
 * @returns {void}
 */
export function addArias (el?: Element) {
	if (!el) return;
	el.setAttribute('aria-haspopup', 'true');
	el.setAttribute('aria-expanded', 'true');
}

/**
 * Removes aria-expanded attribute from the element or elements matching the selector.
 * @param selectorOrEl - A CSS selector string or an Element.
 */
export function removeArias (selectorOrEl?: string | Element) {
	if (typeof selectorOrEl === 'string' && selectorOrEl !== 'body') {
		const elems = document.querySelectorAll(selectorOrEl);
		if (elems && elems.length) elems.forEach(el => el.setAttribute('aria-expanded', 'false'));
	}
	else if (selectorOrEl instanceof Element) {
		selectorOrEl.setAttribute('aria-expanded', 'false');
	}
}
