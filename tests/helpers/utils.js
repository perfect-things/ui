// workaround for structuredClone not being available in JSDOM
window.structuredClone = (val) => JSON.parse(JSON.stringify(val));

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


export function waitForTimeout (timeout = 300) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
