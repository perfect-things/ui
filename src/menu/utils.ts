export function addArias (el) {
	if (!el) return;
	el.setAttribute('aria-haspopup', 'true');
	el.setAttribute('aria-expanded', 'true');
}


export function removeArias (selectorOrEl) {
	if (typeof selectorOrEl === 'string' && selectorOrEl !== 'body') {
		const elems = document.querySelectorAll(selectorOrEl);
		if (elems && elems.length) elems.forEach(el => el.setAttribute('aria-expanded', 'false'));
	}
	else if (selectorOrEl instanceof Element) {
		selectorOrEl.setAttribute('aria-expanded', 'false');
	}
}
