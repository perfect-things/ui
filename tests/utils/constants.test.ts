import { expect, test, vi, afterEach, describe } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';

describe('constants', () => {

	afterEach(() => {
		vi.clearAllMocks();
		vi.unstubAllGlobals();
	});

	test('UI state should have default values', () => {
		expect(utils.UI.ANIMATION_SPEED).toBe(0); // Set to 0 by test helper
		expect(utils.UI.PREFERS_DARK).toBe(false);
		expect(utils.UI.FOCUSABLE_SELECTOR).toContain('button:not([disabled])');
		expect(typeof utils.UI.isMobile).toBe('boolean');
	});

	test('FOCUSABLE_SELECTOR should contain all expected selectors', () => {
		const selector = utils.UI.FOCUSABLE_SELECTOR;

		expect(selector).toContain('a[href]:not([disabled])');
		expect(selector).toContain('button:not([disabled])');
		expect(selector).toContain('iframe:not([disabled])');
		expect(selector).toContain('input:not([disabled])');
		expect(selector).toContain('select:not([disabled])');
		expect(selector).toContain('textarea:not([disabled])');
		expect(selector).toContain('[contentEditable]');
		expect(selector).toContain('[tabindex]:not(.focus-trap)');
	});

	describe('isMobile function', () => {
		test('should detect mobile user agents (debug test)', () => {
			expect(() => utils.isMobile()).not.toThrow();
			expect(typeof utils.isMobile()).toBe('boolean');
		});

		test('should detect mobile user agents (Android)', () => {
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Linux; Android 9; SM-G973F) AppleWebKit/537.36 Mobile Safari/537.36' });
			expect(utils.isMobile()).toBe(true);
		});

		test('should detect mobile user agents (iPhone)', () => {
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) Mobile/15E148 Safari/604.1' });
			expect(utils.isMobile()).toBe(true);
		});

		test('should detect mobile user agents (BlackBerry)', () => {
			vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ Mobile Safari/534.11+' });
			expect(utils.isMobile()).toBe(true);
		});

		test('should detect mobile from first 4 characters of user agent', () => {
			vi.stubGlobal('navigator', { userAgent: '1207/some-mobile-device' });
			expect(utils.isMobile()).toBe(true);

			vi.stubGlobal('navigator', { userAgent: '6310/mobile-device' });
			expect(utils.isMobile()).toBe(true);

			// Test mobile firefox pattern
			vi.stubGlobal('navigator', { userAgent: 'mobile firefox some-device' });
			expect(utils.isMobile()).toBe(true);
		});

		test('should not detect desktop user agents as mobile', () => {
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

		test('should handle edge cases', () => {
			// Test empty user agent
			vi.stubGlobal('navigator', { userAgent: '' });
			expect(utils.isMobile()).toBe(false);

			// Test very short user agent that doesn't match
			vi.stubGlobal('navigator', { userAgent: 'xyz' });
			expect(utils.isMobile()).toBe(false);
		});
	});

	test('should handle matchMedia functionality', () => {
		// Mock matchMedia for testing
		const mockMatchMedia = vi.fn();
		mockMatchMedia.mockImplementation((query: string) => ({
			matches: query === '(prefers-reduced-motion: reduce)',
			addEventListener: vi.fn(),
			removeEventListener: vi.fn()
		}));

		vi.stubGlobal('matchMedia', mockMatchMedia);

		// The constants file should work with or without matchMedia
		expect(() => {
			// Access the UI object to ensure it's initialized
			expect(utils.UI).toBeDefined();
		}).not.toThrow();
	});

	test('should handle missing matchMedia gracefully', () => {
		// Test that code works when matchMedia is undefined
		vi.stubGlobal('matchMedia', undefined);

		expect(() => {
			// Access the UI object to ensure it works without matchMedia
			expect(utils.UI.ANIMATION_SPEED).toBeDefined();
			expect(utils.UI.PREFERS_DARK).toBeDefined();
		}).not.toThrow();
	});

	test('should maintain backwards compatibility', () => {
		// Test that the utils export contains expected properties
		expect(utils.UI).toBeDefined();
		expect(utils.isMobile).toBeDefined();
		expect(typeof utils.isMobile).toBe('function');
	});

	test('UI state should be reactive', () => {
		// Test that UI state properties are accessible and have correct types
		expect(typeof utils.UI.ANIMATION_SPEED).toBe('number');
		expect(typeof utils.UI.PREFERS_DARK).toBe('boolean');
		expect(typeof utils.UI.FOCUSABLE_SELECTOR).toBe('string');
		expect(typeof utils.UI.isMobile).toBe('boolean');
	});

	test('FOCUSABLE_SELECTOR should be properly formatted', () => {
		const selector = utils.UI.FOCUSABLE_SELECTOR;

		// Should contain commas separating selectors
		expect(selector.includes(',')).toBe(true);

		// Should not start or end with comma
		expect(selector.startsWith(',')).toBe(false);
		expect(selector.endsWith(',')).toBe(false);

		// Should contain expected number of selectors (8 total)
		const selectorCount = selector.split(',').length;
		expect(selectorCount).toBe(8);
	});

});
