import { expect, test, describe, beforeEach } from 'vitest';

import '../helpers/utils';
import * as utils from '../../src/utils';


describe('setValueAtPath', () => {
	let data;

	beforeEach(() => {
		data = {
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
	});

	test('should set the value at the specified path', () => {
		utils.setValueAtPath(data, 'child.newKey', 'newValue');
		expect(data.child.newKey).toBe('newValue');
	});

	test('should create nested objects if they do not exist', () => {
		utils.setValueAtPath(data, 'child.new.nested.key', 'newValue');
		expect(data.child.new.nested.key).toBe('newValue');
	});

	test('should handle array indices in the path', () => {
		utils.setValueAtPath(data, 'child.array[0].child[2].newKey', 'newValue');
		expect(data.child.array[0].child[2].newKey).toBe('newValue');
	});

	test('should handle paths with strings as keys', () => {
		utils.setValueAtPath(data, "child['abc'][3].newKey", 'newValue');
		expect(data.child.abc[3].newKey).toBe('newValue');
	});

	test('should handle paths with double quotes as keys', () => {
		utils.setValueAtPath(data, 'child["abc"][3].newKey', 'newValue');
		expect(data.child.abc[3].newKey).toBe('newValue');
	});

	test('should handle paths with leading dots', () => {
		utils.setValueAtPath(data, '.child.newKey', 'newValue');
		expect(data.child.newKey).toBe('newValue');
	});

	test('should handle paths with spaces in keys', () => {
		utils.setValueAtPath(data, "child['abc def'].newKey", 'newValue');
		expect(data.child['abc def'].newKey).toBe('newValue');
	});

});
