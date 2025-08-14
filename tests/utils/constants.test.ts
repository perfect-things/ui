import { expect, test, describe } from 'vitest';
import { FOCUSABLE_SELECTOR, DEFAULT_ANIMATION_SPEED } from '../../src/utils';



describe('constants', () => {

	test('DEFAULT_ANIMATION_SPEED should be a non-zero number', () => {
		expect(typeof DEFAULT_ANIMATION_SPEED).toBe('number');
		expect(DEFAULT_ANIMATION_SPEED).toBeGreaterThan(0);
	});


	test('FOCUSABLE_SELECTOR should contain all expected selectors', () => {
		expect(typeof FOCUSABLE_SELECTOR).toBe('string');
		expect(FOCUSABLE_SELECTOR).toContain('button:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('a[href]:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('button:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('iframe:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('input:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('select:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('textarea:not([disabled])');
		expect(FOCUSABLE_SELECTOR).toContain('[contentEditable]');
		expect(FOCUSABLE_SELECTOR).toContain('[tabindex]:not(.focus-trap)');
	});


});
