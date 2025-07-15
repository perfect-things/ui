import { describe, expect, test, vi } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';



test('utils - matchMedia', () => {
	expect(utils.UI.ANIMATION_SPEED).toStrictEqual(0);
});


describe('utils - mouse events', () => {
	test('should extract coordinates from touch events', () => {
		const e = { type: 'touch', changedTouches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
		const x = utils.getMouseX(e);
		const y = utils.getMouseY(e);
		expect(x).toBe(100);
		expect(y).toBe(100);
	});

	test('should extract coordinates from mouse events', () => {
		const e = { type: 'click', changedTouches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
		const x = utils.getMouseX(e);
		const y = utils.getMouseY(e);
		expect(x).toBe(200);
		expect(y).toBe(200);
	});

	test('should return coordinate tuple from getMouseXY', () => {
		const e = { type: 'click', changedTouches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
		const [x, y] = utils.getMouseXY(e);
		expect(x).toBe(200);
		expect(y).toBe(200);
	});

	test('should handle touchstart event type', () => {
		const e = { type: 'touchstart', changedTouches: [{ clientX: 150, clientY: 250 }], clientX: 300, clientY: 400 };
		expect(utils.getMouseX(e)).toBe(150);
		expect(utils.getMouseY(e)).toBe(250);
	});
});


describe('utils - isInScrollable', () => {
	test('should return false for non-HTMLElement and non-SVGElement nodes', () => {
		const textNode = document.createTextNode('test');
		expect(utils.isInScrollable(textNode as any)).toBe(false);

		const commentNode = document.createComment('test');
		expect(utils.isInScrollable(commentNode as any)).toBe(false);

		expect(utils.isInScrollable(null as any)).toBe(false);
		expect(utils.isInScrollable(undefined as any)).toBe(false);
	});

	test('should return true when element itself is scrollable', () => {
		const element = document.createElement('div');

		// Mock getComputedStyle to return scrollable overflow
		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: 'auto',
			overflow: 'visible'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		// Mock scrollWidth and clientWidth to make element scrollable
		Object.defineProperty(element, 'scrollWidth', { value: 200, configurable: true });
		Object.defineProperty(element, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(element)).toBe(true);
	});

	test('should return true when element has scroll overflow', () => {
		const element = document.createElement('div');

		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: 'scroll',
			overflow: 'visible'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		Object.defineProperty(element, 'scrollWidth', { value: 200, configurable: true });
		Object.defineProperty(element, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(element)).toBe(true);
	});

	test('should return false when element has no scrollable overflow', () => {
		const element = document.createElement('div');

		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: 'visible',
			overflow: 'visible'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		Object.defineProperty(element, 'scrollWidth', { value: 100, configurable: true });
		Object.defineProperty(element, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(element)).toBe(false);
	});

	test('should return false when element has scrollable overflow but same scroll and client width', () => {
		const element = document.createElement('div');

		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: 'auto',
			overflow: 'visible'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		Object.defineProperty(element, 'scrollWidth', { value: 100, configurable: true });
		Object.defineProperty(element, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(element)).toBe(false);
	});

	test('should return true when parent element is scrollable', () => {
		const parent = document.createElement('div');
		const child = document.createElement('div');
		parent.appendChild(child);

		const mockGetComputedStyle = vi.fn()
			.mockReturnValueOnce({
				// Child element - not scrollable
				overflowX: 'visible',
				overflow: 'visible'
			})
			.mockReturnValueOnce({
				// Parent element - scrollable
				overflowX: 'auto',
				overflow: 'visible'
			});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		// Child is not scrollable
		Object.defineProperty(child, 'scrollWidth', { value: 50, configurable: true });
		Object.defineProperty(child, 'clientWidth', { value: 50, configurable: true });

		// Parent is scrollable
		Object.defineProperty(parent, 'scrollWidth', { value: 200, configurable: true });
		Object.defineProperty(parent, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(child)).toBe(true);
	});

	test('should return false when neither element nor parents are scrollable', () => {
		const grandparent = document.createElement('div');
		const parent = document.createElement('div');
		const child = document.createElement('div');
		grandparent.appendChild(parent);
		parent.appendChild(child);

		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: 'visible',
			overflow: 'visible'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		// All elements have same scroll and client width (not scrollable)
		[child, parent, grandparent].forEach(element => {
			Object.defineProperty(element, 'scrollWidth', { value: 100, configurable: true });
			Object.defineProperty(element, 'clientWidth', { value: 100, configurable: true });
		});

		expect(utils.isInScrollable(child)).toBe(false);
	});

	test('should work with SVGElement', () => {
		const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: 'auto',
			overflow: 'visible'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		Object.defineProperty(svgElement, 'scrollWidth', { value: 200, configurable: true });
		Object.defineProperty(svgElement, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(svgElement)).toBe(true);
	});

	test('should check overflow property when overflowX is not set', () => {
		const element = document.createElement('div');

		const mockGetComputedStyle = vi.fn().mockReturnValue({
			overflowX: '',
			overflow: 'scroll'
		});
		vi.stubGlobal('getComputedStyle', mockGetComputedStyle);

		Object.defineProperty(element, 'scrollWidth', { value: 200, configurable: true });
		Object.defineProperty(element, 'clientWidth', { value: 100, configurable: true });

		expect(utils.isInScrollable(element)).toBe(true);
	});
});
