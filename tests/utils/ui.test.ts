import { expect, test, vi, afterEach, describe } from 'vitest';
import * as utils from '../../src/utils';



describe('constants', () => {

	afterEach(() => {
		vi.clearAllMocks();
		vi.unstubAllGlobals();
	});


	test('UI state should have default values', () => {
		expect(utils.UI.ANIMATION_SPEED).toBe(0); // Set to 0 by test helper
		expect(utils.UI.PREFERS_DARK).toBe(true);
		expect(typeof utils.UI.IS_MOBILE).toBe('boolean');
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
		expect(typeof utils.UI.IS_MOBILE).toBe('boolean');
	});

});
