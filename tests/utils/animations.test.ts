import { describe, expect, test, vi } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';


describe('utils - formatDate', () => {

	test('animate is called', async () => {
		const div = document.createElement('div');
		document.body.appendChild(div);

		const spy = vi.spyOn(div, 'animate');
		await utils.animate(div, {}, {});
		expect(spy).toHaveBeenCalled();
	});


	test('resolves when element does not exist', async () => {
		const res = await utils.animate(undefined, {}, {});
		expect(res).toBeUndefined();
	});
});



describe('utils - blink', () => {

	test('utils - blink', async () => {
		const div = document.createElement('div');
		document.body.appendChild(div);

		const spy = vi.spyOn(div, 'animate');
		await utils.blink(div);
		expect(spy).toHaveBeenCalled();
	});

});
