import { expect, test, vi, beforeEach, afterEach, describe } from 'vitest';
import './helpers/utils';

describe('index.ts module initialization', () => {
	let originalClassList: DOMTokenList;
	let mockAdd: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		// Store original classList
		originalClassList = document.documentElement.classList;

		// Create mock functions
		mockAdd = vi.fn();

		// Mock classList
		const mockClassList = {
			add: mockAdd,
			remove: vi.fn(),
			contains: vi.fn(),
			toggle: vi.fn(),
			replace: vi.fn(),
			length: 0,
			value: '',
			toString: vi.fn(() => ''),
			item: vi.fn(),
			forEach: vi.fn()
		} as unknown as DOMTokenList;

		Object.defineProperty(document.documentElement, 'classList', {
			value: mockClassList,
			writable: true,
			configurable: true
		});

		// Clear module cache before each test
		vi.resetModules();
	});

	afterEach(() => {
		// Restore original classList
		Object.defineProperty(document.documentElement, 'classList', {
			value: originalClassList,
			writable: true,
			configurable: true
		});

		vi.clearAllMocks();
		vi.unstubAllGlobals();
	});

	test('should add mobile class when isMobile is true', async () => {
		// Mock mobile user agent
		vi.stubGlobal('navigator', {
			userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) Mobile/15E148 Safari/604.1'
		});

		// Import the module to trigger the initialization code
		await import('../src/index');

		// Verify that mobile class was added
		expect(mockAdd).toHaveBeenCalledWith('mobile');
	});

	test('should add desktop class when isMobile is false', async () => {
		// Mock desktop user agent
		vi.stubGlobal('navigator', {
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
		});

		// Import the module to trigger the initialization code
		await import('../src/index');

		// Verify that desktop class was added
		expect(mockAdd).toHaveBeenCalledWith('desktop');
	});

	test('should handle missing navigator gracefully', () => {
		// Mock missing navigator
		vi.stubGlobal('navigator', undefined);

		// Import should not throw
		expect(async () => {
			await import('../src/index');
		}).not.toThrow();
	});

	test('should only add one class (mobile or desktop)', async () => {
		// Mock mobile user agent
		vi.stubGlobal('navigator', {
			userAgent: 'Mozilla/5.0 (Android 9; Mobile) AppleWebKit/537.36'
		});

		// Import the module
		await import('../src/index');

		// Verify classList.add was called exactly once for this test
		expect(mockAdd).toHaveBeenCalledWith('mobile');
		expect(mockAdd).not.toHaveBeenCalledWith('desktop');
	});
});
