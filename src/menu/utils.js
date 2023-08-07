let typeQuery = '';
let typeTimer;

export function matchQuery (buttons, key) {
	if (!/^\w| $/i.test(key)) return;
	if (typeTimer) clearTimeout(typeTimer);
	typeTimer = setTimeout(() => typeQuery = '', 300);
	typeQuery += key;
	return buttons.find(b => b.text.startsWith(typeQuery));
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


export function addArias (el) {
	if (!el) return;
	el.setAttribute('aria-haspopup', 'true');
	el.setAttribute('aria-expanded', 'true');
}


export function updatePosition (e, type, menuEl, offset, align, isBelowTarget) {
	if (!menuEl) return isBelowTarget;
	if (e && e.detail && e.detail instanceof Event) e = e.detail;

	const etype = e && e.type;
	let left, top;

	if (type === 'context') {
		if (etype === 'contextmenu') {
			top = e.y;
			left = e.x;
		}
		else if (etype === 'longpress') {
			top = e.detail.y;
			left = e.detail.x;
		}

		top += window.scrollY;
		left += window.scrollX;
		menuEl.style.top = top + 'px';
		menuEl.style.left = left + 'px';
	}

	// regular menu
	else if (etype === 'click' || etype === 'focus') {
		const btnBox = e.target.getBoundingClientRect();
		top = (btnBox.top + btnBox.height + offset);
		left = btnBox.left;
		if (align === 'right') {
			left = (btnBox.left + btnBox.width - menuEl.offsetWidth);
		}
		top += window.scrollY;
		left += window.scrollX;

		menuEl.style.top = top + 'px';
		menuEl.style.left = left + 'px';
	}

	// ensure it stays on screen
	const { x, y, width, height } = menuEl.getBoundingClientRect();
	const winH = window.innerHeight;
	const winW = window.innerWidth;
	const padding = 10;

	// regular menu - position above target
	if (etype === 'click' || etype === 'focus') {
		const btnBox = e.target.getBoundingClientRect();
		const spaceAbove = btnBox.top - padding;
		const spaceBelow = winH - btnBox.top - btnBox.height - padding;
		menuEl.style.maxHeight = Math.max(spaceAbove, spaceBelow) + 'px';
		if (spaceAbove > spaceBelow) {
			isBelowTarget = false;
			top = winH - height - padding;
			if (top < y) top = (btnBox.top - height - offset);
			top += window.scrollY;
			menuEl.style.top = top + 'px';
		}
		else isBelowTarget = true;
	}

	// context menu - check if not outside of the screen
	else if (y > winH - height - padding) {
		top = winH - height - padding;
		if (top < 0) top = 2;
		menuEl.style.top = top + window.scrollY + 'px';
	}

	// check if the menu is off the right side of the screen
	if (x > winW - width - padding) {
		left = winW - width - padding;
		if (left < 0) left = 2;
		menuEl.style.left = left + window.scrollX + 'px';
	}

	// check if the menu is off the left side of the screen
	if (x < padding) menuEl.style.left = padding + window.scrollX + 'px';

	return isBelowTarget;
}
