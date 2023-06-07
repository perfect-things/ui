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

	if (type === 'context') {
		if (etype === 'contextmenu') {
			menuEl.style.top = e.y + 'px';
			menuEl.style.left = e.x + 'px';
		}
		else if (etype === 'longpress') {
			menuEl.style.top = e.detail.y + 'px';
			menuEl.style.left = e.detail.x + 'px';
		}
	}

	// regular menu
	else if (etype === 'click' || etype === 'focus') {
		const btnBox = e.target.getBoundingClientRect();
		menuEl.style.top = (btnBox.top + btnBox.height + offset) + 'px';
		menuEl.style.left = btnBox.left + 'px';
		if (align === 'right') {
			menuEl.style.left = (btnBox.left + btnBox.width - menuEl.offsetWidth) + 'px';
		}
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
			const top = winH - height - padding;
			if (top < y) {
				menuEl.style.top = (btnBox.top - height - offset) + 'px';
			}
		}
		else isBelowTarget = true;
	}

	// context menu - check if not outside of the screen
	else if (y > winH - height - padding) {
		let top = winH - height - padding;
		if (top < 0) top = 2;
		menuEl.style.top = top + 'px';
	}

	// check if the menu is off the right side of the screen
	if (x > winW - width - padding) {
		let left = winW - width - padding;
		if (left < 0) left = 2;
		menuEl.style.left = left + 'px';
	}

	// check if the menu is off the left side of the screen
	if (x < padding) menuEl.style.left = padding + 'px';

	return isBelowTarget;
}
