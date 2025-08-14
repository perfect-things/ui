import { describe, expect, test, vi } from 'vitest';
import * as utils from '../../src/utils';


describe('utilities', () => {

	describe('fuzzy', () => {
		test('returns true for empty strings', () => {
			expect(utils.fuzzy()).toBe(true);
			expect(utils.fuzzy('')).toBe(true);
			expect(utils.fuzzy('', '')).toBe(true);
		});

		test('filters correctly', () => {
			expect(utils.fuzzy('a', '')).toBe(true);
			expect(utils.fuzzy('', 'a')).toBe(false);
			expect(utils.fuzzy('a', 'ab')).toBe(false);
			expect(utils.fuzzy('ab', 'ab')).toBe(true);

			expect(utils.fuzzy('abc', 'ab')).toBe(true);
			expect(utils.fuzzy('abc', 'bc')).toBe(true);
			expect(utils.fuzzy('abc', 'AB')).toBe(true);
			expect(utils.fuzzy('ABC', 'ac')).toBe(true);
			expect(utils.fuzzy('ABC', 'ad')).toBe(false);
		});
	});



	describe('guid', () => {
		test('generates a valid GUID', () => {
			const id = utils.guid();
			expect(id).toBeTruthy();
			expect(id.length).toBe(36);
		});
	});



	describe('isColorDark', () => {
		test('returns true for dark colors', () => {
			expect(utils.isColorDark('#333333')).toBe(true);
			expect(utils.isColorDark('#000000')).toBe(true);
		});


		test('returns false for light colors', () => {
			expect(utils.isColorDark('#ffffff')).toBe(false);
			expect(utils.isColorDark('#cccccc')).toBe(false);
		});


		test('handles shorthand hex colors', () => {
			expect(utils.isColorDark('#333')).toBe(true);
			expect(utils.isColorDark('#fff')).toBe(false);
		});


		test('handles invalid hex colors', () => {
			expect(utils.isColorDark('not a hex color')).toBe(false);
			expect(utils.isColorDark('#12345')).toBe(false);
			expect(utils.isColorDark('#gggggg')).toBe(false);
		});
	});



	describe('isMobile', () => {
		test('detects mobile user agents', () => {
			expect(() => utils.isMobile()).not.toThrow();
			expect(typeof utils.isMobile()).toBe('boolean');
		});


		test('detects mobile user agents (Android)', () => {
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Linux; Android 9; SM-G973F) AppleWebKit/537.36 Mobile Safari/537.36' });
			expect(utils.isMobile()).toBe(true);
		});


		test('detects mobile user agents (iPhone)', () => {
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) Mobile/15E148 Safari/604.1' });
			expect(utils.isMobile()).toBe(true);
		});


		test('detects mobile user agents (BlackBerry)', () => {
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ Mobile Safari/534.11+' });
			expect(utils.isMobile()).toBe(true);
		});


		test('detects mobile from first 4 characters of user agent', () => {
			vi.stubGlobal('navigator', { userAgent: '1207/some-mobile-device' });
			expect(utils.isMobile()).toBe(true);

			vi.stubGlobal('navigator', { userAgent: '6310/mobile-device' });
			expect(utils.isMobile()).toBe(true);

			// Test mobile firefox pattern
			vi.stubGlobal('navigator', { userAgent: 'mobile firefox some-device' });
			expect(utils.isMobile()).toBe(true);
		});


		test('doesn\'t detect desktop user agents as mobile', () => {
			// Test desktop Chrome
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' });
			expect(utils.isMobile()).toBe(false);

			// Test desktop Firefox
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0' });
			expect(utils.isMobile()).toBe(false);

			// Test macOS Safari
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15' });
			expect(utils.isMobile()).toBe(false);
		});


		test('handles edge cases', () => {
			// Test empty user agent
			vi.stubGlobal('navigator', { userAgent: '' });
			expect(utils.isMobile()).toBe(false);

			// Test very short user agent that doesn't match
			vi.stubGlobal('navigator', { userAgent: 'xyz' });
			expect(utils.isMobile()).toBe(false);
		});
	});


});
