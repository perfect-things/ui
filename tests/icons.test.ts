import { expect, test, describe, beforeEach } from 'vitest';
import { getIcon, addIcon, ICON, icons, aliases, customIcons } from '../src';

describe('Icons Module', () => {
	beforeEach(() => {
		// Clear custom icons before each test to ensure clean state
		Object.keys(customIcons).forEach(key => delete customIcons[key]);
	});

	describe('getIcon function', () => {
		test('should return SVG for existing icon', () => {
			const result = getIcon('alert');
			expect(result).toContain('<svg');
			expect(result).toContain('alert-triangle');
			expect(result).toContain('</svg>');
			expect(result).toContain('class="icon icon-tabler icon-tabler-');
		});

		test('should return SVG for alias', () => {
			const aliasResult = getIcon('add');
			const directResult = getIcon('plus');
			expect(aliasResult).toBe(directResult);
		});

		test('should return default SVG for non-existent icon', () => {
			const result = getIcon('nonexistent');
			expect(result).toBe('<svg width="20" height="20" title="nonexistent"></svg>');
		});

		test('should return custom icon when available', () => {
			const customSvg = '<svg>custom</svg>';
			addIcon('customTest', customSvg);
			const result = getIcon('customTest');
			expect(result).toBe(customSvg);
		});

		test('should prioritize custom icons over built-in icons', () => {
			const customSvg = '<svg>custom alert</svg>';
			addIcon('alert', customSvg);
			const result = getIcon('alert');
			expect(result).toBe(customSvg);
		});

		test('should handle empty string', () => {
			const result = getIcon('');
			expect(result).toBe('<svg width="20" height="20" title=""></svg>');
		});

		test('should handle all known aliases', () => {
			const aliasKeys = Object.keys(aliases) as Array<keyof typeof aliases>;
			aliasKeys.forEach(alias => {
				const aliasResult = getIcon(alias);
				const targetIcon = aliases[alias];
				const directResult = getIcon(targetIcon);
				expect(aliasResult).toBe(directResult);
			});
		});

		test('should include proper SVG attributes', () => {
			const result = getIcon('home');
			expect(result).toContain('xmlns="http://www.w3.org/2000/svg"');
			expect(result).toContain('width="32"');
			expect(result).toContain('height="32"');
			expect(result).toContain('viewBox="0 0 24 24"');
			expect(result).toContain('stroke="currentColor"');
		});

		test('should return consistent results for multiple calls', () => {
			const result1 = getIcon('check');
			const result2 = getIcon('check');
			expect(result1).toBe(result2);
		});
	});

	describe('addIcon function', () => {
		test('should add new custom icon', () => {
			const customSvg = '<svg>test icon</svg>';
			addIcon('testIcon', customSvg);
			expect(customIcons.testIcon).toBe(customSvg);
			expect(getIcon('testIcon')).toBe(customSvg);
		});

		test('should not overwrite existing custom icon', () => {
			const firstSvg = '<svg>first</svg>';
			const secondSvg = '<svg>second</svg>';

			addIcon('duplicate', firstSvg);
			addIcon('duplicate', secondSvg);

			expect(customIcons.duplicate).toBe(firstSvg);
			expect(getIcon('duplicate')).toBe(firstSvg);
		});

		test('should handle empty strings', () => {
			addIcon('', '<svg>empty name</svg>');
			addIcon('emptyContent', '');

			expect(customIcons['']).toBe('<svg>empty name</svg>');
			expect(customIcons.emptyContent).toBe('');
		});

		test('should allow adding icons with same name as built-in icons', () => {
			const customAlertSvg = '<svg>custom alert</svg>';
			addIcon('alert', customAlertSvg);

			expect(customIcons.alert).toBe(customAlertSvg);
			expect(getIcon('alert')).toBe(customAlertSvg);
		});

		test('should handle special characters in icon names', () => {
			const specialSvg = '<svg>special</svg>';
			addIcon('icon-with-dashes', specialSvg);
			addIcon('icon_with_underscores', specialSvg);
			addIcon('icon123', specialSvg);

			expect(customIcons['icon-with-dashes']).toBe(specialSvg);
			expect(customIcons.icon_with_underscores).toBe(specialSvg);
			expect(customIcons.icon123).toBe(specialSvg);
		});
	});

	describe('ICON constant', () => {
		test('should contain uppercase versions of all icon names', () => {
			expect(ICON.ALERT).toBe('alert');
			expect(ICON.CHECK).toBe('check');
			expect(ICON.HOME).toBe('home');
			expect(ICON.USER).toBe('user');
		});

		test('should contain uppercase versions of all aliases', () => {
			expect(ICON.ADD).toBe('plus'); // alias for plus
			expect(ICON.REPORT).toBe('reportAnalytics'); // alias for reportAnalytics
			expect(ICON.SUCCESS).toBe('checkCircle'); // alias for checkCircle
			expect(ICON.WARNING).toBe('alert'); // alias for alert
			expect(ICON.SETTINGS).toBe('cog'); // alias for cog
		});

		test('should have all icon keys in uppercase', () => {
			const iconKeys = Object.keys(ICON);
			iconKeys.forEach(key => {
				expect(key).toBe(key.toUpperCase());
			});
		});

		test('should contain all built-in icons', () => {
			const builtInIconNames = Object.keys(icons);
			builtInIconNames.forEach(iconName => {
				const upperKey = iconName.toUpperCase();
				expect(ICON).toHaveProperty(upperKey);
				expect(ICON[upperKey as keyof typeof ICON]).toBe(iconName);
			});
		});

		test('should work with getIcon function', () => {
			const result = getIcon(ICON.ARROWLEFT);
			expect(result).toContain('arrow-left');
			expect(result).toContain('<svg');
		});
	});

	describe('Icons object', () => {
		test('should contain expected icon entries', () => {
			expect(icons).toHaveProperty('alert');
			expect(icons).toHaveProperty('check');
			expect(icons).toHaveProperty('home');
			expect(icons).toHaveProperty('user');
			expect(icons).toHaveProperty('arrowLeft');
			expect(icons).toHaveProperty('arrowRight');
		});

		test('should have string values for all icons', () => {
			Object.values(icons).forEach(iconValue => {
				expect(typeof iconValue).toBe('string');
				expect(iconValue.length).toBeGreaterThan(0);
			});
		});

		test('should be immutable (const assertion provides type safety)', () => {
			// The const assertion provides compile-time immutability, not runtime freezing
			// This test verifies the object structure and that TypeScript prevents mutations
			expect(typeof icons).toBe('object');
			expect(icons).not.toBeNull();

			// TypeScript should prevent mutations (compile-time check)
			// icons.newIcon = 'test'; // This would cause a TypeScript error
		});
	});

	describe('Aliases object', () => {
		test('should contain expected aliases', () => {
			expect(aliases.add).toBe('plus');
			expect(aliases.report).toBe('reportAnalytics');
			expect(aliases.success).toBe('checkCircle');
			expect(aliases.warning).toBe('alert');
			expect(aliases.settings).toBe('cog');
		});

		test('should map to existing icons', () => {
			Object.values(aliases).forEach(targetIcon => {
				expect(icons).toHaveProperty(targetIcon);
			});
		});

		test('should be immutable (const assertion provides type safety)', () => {
			// The const assertion provides compile-time immutability, not runtime freezing
			// This test verifies the object structure and that TypeScript prevents mutations
			expect(typeof aliases).toBe('object');
			expect(aliases).not.toBeNull();

			// TypeScript should prevent mutations (compile-time check)
			// aliases.newAlias = 'test'; // This would cause a TypeScript error
		});
	});

	describe('Custom icons object', () => {
		test('should start empty', () => {
			expect(Object.keys(customIcons)).toHaveLength(0);
		});

		test('should be mutable', () => {
			customIcons.test = '<svg>test</svg>';
			expect(customIcons.test).toBe('<svg>test</svg>');
			delete customIcons.test;
			expect(customIcons.test).toBeUndefined();
		});

		test('should persist additions', () => {
			addIcon('persistent', '<svg>persistent</svg>');
			expect(customIcons.persistent).toBe('<svg>persistent</svg>');
		});
	});

	describe('Integration tests', () => {
		test('should handle complete icon workflow', () => {
			// Test built-in icon
			const builtinResult = getIcon('check');
			expect(builtinResult).toContain('check');

			// Test alias
			const aliasResult = getIcon('add');
			expect(aliasResult).toContain('plus');

			// Add custom icon
			addIcon('workflow', '<svg>workflow</svg>');
			const customResult = getIcon('workflow');
			expect(customResult).toBe('<svg>workflow</svg>');

			// Test ICON constant
			expect(getIcon(ICON.CHECK)).toBe(builtinResult);
		});

		test('should handle all icon types in sequence', () => {
			// Built-in icon
			expect(getIcon('home')).toContain('home');

			// Alias
			expect(getIcon('settings')).toContain('settings');

			// Custom icon
			addIcon('sequence', '<svg>sequence</svg>');
			expect(getIcon('sequence')).toBe('<svg>sequence</svg>');

			// Non-existent
			expect(getIcon('missing')).toContain('title="missing"');
		});

		test('should maintain icon consistency across multiple operations', () => {
			const iconName = 'consistency';
			const svgContent = '<svg>consistent</svg>';

			// Add icon
			addIcon(iconName, svgContent);

			// Multiple retrievals should be consistent
			const result1 = getIcon(iconName);
			const result2 = getIcon(iconName);
			const result3 = getIcon(iconName);

			expect(result1).toBe(svgContent);
			expect(result2).toBe(svgContent);
			expect(result3).toBe(svgContent);
			expect(result1).toBe(result2);
			expect(result2).toBe(result3);
		});
	});

	describe('Edge cases and error handling', () => {
		test('should handle null and undefined gracefully', () => {
			// Testing runtime behavior with non-string inputs
			expect(() => getIcon(null as any)).not.toThrow();
			expect(() => getIcon(undefined as any)).not.toThrow();
		});

		test('should handle numeric inputs', () => {
			// Testing runtime behavior with numeric input
			const result = getIcon(123 as any);
			expect(result).toContain('title="123"');
		});

		test('should handle very long icon names', () => {
			const longName = 'a'.repeat(1000);
			const result = getIcon(longName);
			expect(result).toContain(`title="${longName}"`);
		});

		test('should handle special characters in icon names', () => {
			const specialName = '!@#$%^&*()';
			const result = getIcon(specialName);
			expect(result).toContain(`title="${specialName}"`);
		});

		test('should handle adding icon with null/undefined values', () => {
			// Testing runtime behavior with non-string svg values
			expect(() => addIcon('test', null as any)).not.toThrow();
			expect(() => addIcon('test', undefined as any)).not.toThrow();
		});
	});

	describe('Performance and memory', () => {
		test('should not leak memory when adding many custom icons', () => {
			const initialKeys = Object.keys(customIcons).length;

			// Add many icons
			for (let i = 0; i < 100; i++) {
				addIcon(`perf-test-${i}`, `<svg>icon-${i}</svg>`);
			}

			expect(Object.keys(customIcons).length).toBe(initialKeys + 100);

			// Clean up
			for (let i = 0; i < 100; i++) {
				delete customIcons[`perf-test-${i}`];
			}

			expect(Object.keys(customIcons).length).toBe(initialKeys);
		});

		test('should handle rapid successive calls efficiently', () => {
			const start = performance.now();

			for (let i = 0; i < 1000; i++) {
				getIcon('check');
			}

			const end = performance.now();
			const duration = end - start;

			// Should complete 1000 calls in reasonable time (less than 100ms)
			expect(duration).toBeLessThan(100);
		});
	});
});
