// workaround for structuredClone not being available in JSDOM
window.structuredClone = (val) => JSON.parse(JSON.stringify(val));

// workaround for ResizeObserver not being available in JSDOM
window.ResizeObserver = jest.fn().mockImplementation(() => ({
	disconnect: jest.fn(),
	observe: jest.fn(),
	unobserve: jest.fn(),
}));

// workaround for window.matchMedia not being available in JSDOM
window.matchMedia = jest.fn().mockImplementation(() => ({ matches: false }));

// workaround for element.animate not being available in JSDOM
window.Element.prototype.animate = jest.fn().mockImplementation(() => {
	const obj = {
		onfinish: jest.fn(),
		oncancel: jest.fn(),
	};
	requestAnimationFrame(() => obj.onfinish());
	return obj;
});


export function offsetHeight (el, value = 50) {
	Object.defineProperty(el, 'offsetHeight', { configurable: true, value });
}

export function offsetWidth (el, value = 50) {
	Object.defineProperty(el, 'offsetWidth', { configurable: true, value });
}

export function offsetTop (el, value = 50) {
	Object.defineProperty(el, 'offsetTop', { configurable: true, value });
}

export function offsetLeft (el, value = 50) {
	Object.defineProperty(el, 'offsetLeft', { configurable: true, value });
}

export function waitForTimeout (timeout = 300) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
