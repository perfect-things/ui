import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock CSS imports
vi.mock('*.css', () => ({}));

// Mock Element.animate for tests since jsdom doesn't support it
Object.defineProperty(Element.prototype, 'animate', {
	configurable: true,
	value: () => {
		const obj = {
			cancel: vi.fn(),
			onfinish: vi.fn(),
			oncancel: vi.fn(),
		};
		setTimeout(() => obj.onfinish(), 10);
		return obj;
	}
});

Object.defineProperty(Element.prototype, 'getAnimations', { value: () => ([]) });


Object.defineProperty(Element.prototype, 'scrollIntoView', {
	value: () => vi.fn().mockImplementation(() => {})
});


window.requestAnimationFrame = (cb) => {
	cb(1);
	return 0;
};


document.elementFromPoint = vi.fn().mockImplementation(() => ({ dataset: {} }));


// @ts-expect-error overriding
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


// @ts-expect-error overriding
window.visualViewport = {
	width: window.innerWidth,
	height: window.innerHeight,
	addEventListener: vi.fn().mockImplementation((name, cb) => cb()),
	removeEventListener: vi.fn().mockImplementation((name, cb) => cb()),
};
