import { describe, expect, test } from 'vitest';

import * as utils from '../../src/utils';



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
