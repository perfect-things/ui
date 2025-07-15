import { expect, test, describe } from 'vitest';

import '../helpers/utils';
import * as utils from '../../src/utils';


describe('getValueAtPath', () => {
	const data = {
		child: {
			grandchild: 'value',
			array: [
				{ child: [{}, {}, { abc: 'nested value' }] }
			],
			'abc def': 'space key',
			abc: [
				{ name: 'first' },
				{ name: 'second' },
				{ name: 'third' },
				{ name: 'fourth' }
			]
		}
	};

	test('should return the value at the specified path', () => {
		expect(utils.getValueAtPath(data, 'child.grandchild', 'default')).toBe('value');
	});

	test('should return the default value if the path does not exist', () => {
		expect(utils.getValueAtPath(data, 'child.nonexistent', 'default')).toBe('default');
	});

	test('should handle array indices in the path', () => {
		expect(utils.getValueAtPath(data, 'child.array[0].child[2].abc', 'default')).toBe('nested value');
	});

	test('should handle paths with strings as keys', () => {
		expect(utils.getValueAtPath(data, "child['abc'][3].name", 'default')).toBe('fourth');
		expect(utils.getValueAtPath(data, "child['abc def']", 'default')).toBe('space key');
	});

	test('should handle paths with double quotes as keys', () => {
		expect(utils.getValueAtPath(data, 'child["abc"][3].name', 'default')).toBe('fourth');
		expect(utils.getValueAtPath(data, 'child["abc def"]', 'default')).toBe('space key');
	});

	test('should return the default value if the path is invalid', () => {
		expect(utils.getValueAtPath(data, 'child.array[0].child[2].nonexistent', 'default')).toBe('default');
	});

	test('should return the default value if the object is null or undefined', () => {
		expect(utils.getValueAtPath(null, 'child.grandchild', 'default')).toBe('default');
		expect(utils.getValueAtPath(undefined, 'child.grandchild', 'default')).toBe('default');
	});

	test('should handle paths with leading dots', () => {
		expect(utils.getValueAtPath(data, '.child.grandchild', 'default')).toBe('value');
	});

	test('should handle paths with spaces in keys', () => {
		expect(utils.getValueAtPath(data, "child['abc def']", 'default')).toBe('space key');
	});
});
