import { get } from 'svelte/store';
import { ANIMATION_SPEED } from '../../src';
import { expect, test, vi } from 'vitest';

document.elementFromPoint = vi.fn().mockImplementation(() => ({ dataset: {} }));

document.scrollingElement = vi.fn().mockImplementation(() => ({
	scrollTop: vi.fn(),
}));


// workaround for ResizeObserver not being available in JSDOM
window.ResizeObserver = vi.fn().mockImplementation(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	unobserve: vi.fn(),
}));

// workaround for window.matchMedia not being available in JSDOM
window.matchMedia = vi.fn().mockImplementation(() => ({
	matches: false,
	addEventListener: vi.fn(),
}));

// workaround for element.animate not being available in JSDOM
window.Element.prototype.animate = vi.fn().mockImplementation(() => {
	const obj = {
		onfinish: vi.fn(),
		oncancel: vi.fn(),
	};
	requestAnimationFrame(() => obj.onfinish());
	return obj;
});

window.visualViewport = {
	width: window.innerWidth,
	height: window.innerHeight,
	addEventListener: vi.fn().mockImplementation((name, cb) => cb()),
	removeEventListener: vi.fn().mockImplementation((name, cb) => cb()),
};
window.Element.prototype.scrollIntoView = vi.fn().mockImplementation(() => {});


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

export function waitForTimeout (timeout) {
	timeout = typeof timeout === 'number' ? timeout : get(ANIMATION_SPEED) + 200;
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
