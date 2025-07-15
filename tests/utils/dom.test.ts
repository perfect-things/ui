import { expect, test } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';



test('utils - matchMedia', () => {
	expect(utils.UI.ANIMATION_SPEED).toStrictEqual(0);
});


test('utils - mouse events', () => {
	const e = { type: 'touch', changedTouches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
	const x = utils.getMouseX(e);
	const y = utils.getMouseY(e);
	expect(x).toBe(100);
	expect(y).toBe(100);

	e.type = 'click';
	const x2 = utils.getMouseX(e);
	const y2 = utils.getMouseY(e);
	expect(x2).toBe(200);
	expect(y2).toBe(200);

	const [x3, y3] = utils.getMouseXY(e);
	expect(x3).toBe(200);
	expect(y3).toBe(200);
});
