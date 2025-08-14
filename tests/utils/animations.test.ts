import { describe, expect, test, vi } from 'vitest';
import * as utils from '../../src/utils';



describe('animations', () => {

	describe('animate', () => {
		test('runs and calls the callbacks', async () => {
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



	describe('blink', () => {

		test('runs and calls the callbacks', async () => {
			const div = document.createElement('div');
			document.body.appendChild(div);

			const spy = vi.spyOn(div, 'animate');
			await utils.blink(div);
			expect(spy).toHaveBeenCalled();
		});

	});

});
