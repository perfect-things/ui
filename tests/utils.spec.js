import { expect, test, vi } from 'vitest';
import { get } from 'svelte/store';

import './helpers/utils';
import * as utils from '../src/utils';
import { waitForTimeout } from './helpers/utils';



test('utils - matchMedia', () => {
	expect(get(utils.ANIMATION_SPEED)).toStrictEqual(200);
});


test('utils - animate', async () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	// spy on div.animate
	const spy = vi.spyOn(div, 'animate');
	await utils.animate(div, {}, {});
	expect(spy).toHaveBeenCalled();
});


test('utils - blink', async () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	const spy = vi.spyOn(div, 'animate');
	utils.blink(div);
	await waitForTimeout();
	expect(spy).toHaveBeenCalled();
});


test('utils - debounce', async () => {
	const fn = vi.fn();
	const debounced = utils.debounce(fn, 100);
	debounced();
	debounced();
	debounced();
	expect(fn).toHaveBeenCalledTimes(0);
	await new Promise(resolve => setTimeout(resolve, 200));
	expect(fn).toHaveBeenCalledTimes(1);
});


describe('utils - deepCopy', () => {
	it('should return a deep copy of an array', () => {
		const arr = [1, 2, { a: 3 }];
		const copy = utils.deepCopy(arr);
		expect(copy).toEqual(arr);
		expect(copy).not.toBe(arr);
		expect(copy[2]).not.toBe(arr[2]);
	});

	it('should return a deep copy of an object', () => {
		const obj = { a: 1, b: { c: 2 } };
		const copy = utils.deepCopy(obj);
		expect(copy).toEqual(obj);
		expect(copy).not.toBe(obj);
		expect(copy.b).not.toBe(obj.b);
	});

	it('should return a new instance of a Date object', () => {
		const date = new Date();
		const copy = utils.deepCopy(date);
		expect(copy).toEqual(date);
		expect(copy).not.toBe(date);
	});

	it('should return a new instance of a RegExp object', () => {
		const regex = /test/gi;
		const copy = utils.deepCopy(regex);
		expect(copy).toEqual(regex);
		expect(copy).not.toBe(regex);
	});

	it('should return a new instance of a Map object', () => {
		const map = new Map();
		map.set('key', 'value');
		const copy = utils.deepCopy(map);
		expect(copy).toEqual(map);
		expect(copy).not.toBe(map);
	});

	it('should return a new instance of a Set object', () => {
		const set = new Set([1, 2, 3]);
		const copy = utils.deepCopy(set);
		expect(copy).toEqual(set);
		expect(copy).not.toBe(set);
	});

	it('should return the same value for primitive values', () => {
		expect(utils.deepCopy(null)).toBe(null);
		expect(utils.deepCopy(undefined)).toBe(undefined);
		expect(utils.deepCopy(10)).toBe(10);
		expect(utils.deepCopy('test')).toBe('test');
	});
});


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


test('utils - throttle', async () => {
	const fn = vi.fn();
	const throttled = utils.throttle(fn, 100);
	throttled();
	throttled();
	throttled();
	expect(fn).toHaveBeenCalledTimes(1);
	await new Promise(resolve => setTimeout(resolve, 200));
	expect(fn).toHaveBeenCalledTimes(1);
});


test('utils - empty', () => {
	expect(utils.empty()).toBe(true);
	expect(utils.empty('')).toBe(true);
	expect(utils.empty([])).toBe(true);
	expect(utils.empty({})).toBe(true);
	expect(utils.empty(null)).toBe(true);
	expect(utils.empty(undefined)).toBe(true);
	expect(utils.empty(0)).toBe(false);
	expect(utils.empty('a')).toBe(false);
	expect(utils.empty([1])).toBe(false);
	expect(utils.empty({ a: 1 })).toBe(false);
});


test('utils - isset', () => {
	expect(utils.isset()).toBe(false);
	expect(utils.isset('')).toBe(true);
	expect(utils.isset([])).toBe(true);
	expect(utils.isset({})).toBe(true);
	expect(utils.isset(null)).toBe(false);
	expect(utils.isset(undefined)).toBe(false);
	expect(utils.isset(0)).toBe(true);
	expect(utils.isset('a')).toBe(true);
	expect(utils.isset([1])).toBe(true);
	expect(utils.isset({ a: 1 })).toBe(true);
});


test('utils - fuzzy', () => {
	expect(utils.fuzzy()).toBe(true);
	expect(utils.fuzzy('')).toBe(true);
	expect(utils.fuzzy('', '')).toBe(true);
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


test('utils - guid', () => {
	const id = utils.guid();
	expect(id).toBeTruthy();
	expect(id.length).toBe(36);
});


test('utils - mouse events', () => {
	const e = { type: 'touch', changedTouches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
	const x = utils.getMouseX(e);
	const y = utils.getMouseY(e);
	expect(x).toBe(100);
	expect(y).toBe(100);

	e.type = 'click';
	const x2 = utils.getMouseX(e);
	const y2 = utils.getMouseY(e);
	expect(x2).toBe(200);
	expect(y2).toBe(200);

	const [x3, y3] = utils.getMouseXY(e);
	expect(x3).toBe(200);
	expect(y3).toBe(200);
});


test('utils - pluckOne', () => {
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	const objRes = { a: 1, c: 3 };
	const plucked = utils.pluck(obj, ['a', 'c']);
	expect(plucked).toEqual(objRes);

	const pluckedSimple = utils.pluck(obj, 'a');
	expect(pluckedSimple).toEqual(objRes.a);

	const pluckedEmpty = utils.pluck();
	expect(pluckedEmpty).toEqual({});
});


test('utils - roundAmount', () => {
	const amount = 123.456;
	const rounded = utils.roundAmount(amount);
	expect(rounded).toBe('123.46');
});


describe('utils - formatDate', () => {
	test('should format the date correctly', () => {
		const date = new Date('2022-01-01T00:00:00');
		expect(utils.formatDate(date)).toBe('2022-01-01 00:00');
	});

	test('should add leading zeros to single-digit months and days', () => {
		const date = new Date('2022-02-03T00:00:00');
		expect(utils.formatDate(date)).toBe('2022-02-03 00:00');
	});

	test('should add leading zeros to single-digit hours and minutes', () => {
		const date = new Date('2022-01-01T01:02:00');
		expect(utils.formatDate(date)).toBe('2022-01-01 01:02');
	});

	test('should handle dates before the year 2000', () => {
		const date = new Date('1999-12-31T23:59:00');
		expect(utils.formatDate(date)).toBe('1999-12-31 23:59');
	});
});


describe('utils - timeAgo', () => {
	test('should return an empty string if no date or now is provided', () => {
		expect(utils.timeAgo()).toBe('');
	});

	test('should return "just now" if the date is the same as now', () => {
		const now = new Date();
		expect(utils.timeAgo(now)).toBe('just now');
	});

	test('should return "1 minute ago" if the date is 1 minute ago', () => {
		const now = new Date();
		const date = new Date(now - 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 minute ago');
	});

	test('should return "2 minutes ago" if the date is 2 minutes ago', () => {
		const now = new Date();
		const date = new Date(now - 2 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 minutes ago');
	});

	test('should return "1 hour ago" if the date is 1 hour ago', () => {
		const now = new Date();
		const date = new Date(now - 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 hour ago');
	});

	test('should return "2 hours ago" if the date is 2 hours ago', () => {
		const now = new Date();
		const date = new Date(now - 2 * 60 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 hours ago');
	});

	test('should return "1 day ago" if the date is 1 day ago', () => {
		const now = new Date();
		const date = new Date(now - 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 day ago');
	});

	test('should return "2 days ago" if the date is 2 days ago', () => {
		const now = new Date();
		const date = new Date(now - 2 * 24 * 60 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 days ago');
	});

	test('should return "1 month ago" if the date is 1 month ago', () => {
		const now = new Date();
		const date = new Date(now - 30 * 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 month ago');
	});

	test('should return "2 months ago" if the date is 2 months ago', () => {
		const now = new Date();
		const date = new Date(now - 2 * 30 * 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('2 months ago');
	});

	test('should return "1 year ago" if the date is 1 year ago', () => {
		const now = new Date();
		const date = new Date(now - 365 * 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 year ago');
	});

	test('should return "2 years ago" if the date is 2 years ago', () => {
		const now = new Date();
		const date = new Date(now - 2 * 365 * 24 * 60 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 years ago');
	});

	test('should return the date in the format "YYYY-MM-DD HH:MM" if more than 2 months ago', () => {
		const now = new Date();
		const date = new Date();
		date.setMonth(date.getMonth() - 13);
		const expected = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ` +
			`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
		expect(utils.timeAgo(date, now)).toBe(expected);
	});
});


describe('utils - alignItem', () => {
	let element, target;

	beforeEach(() => {
		element = document.createElement('div');
		target = document.createElement('button');
		target.style.margin = '10px';
		document.body.appendChild(target);
	});

	afterEach(() => {
		document.body.removeChild(target);
	});


	test('should align element to the bottom left of target', () => {
		utils.alignItem({ element, target, viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe(`${target.offsetTop + target.offsetHeight}px`);
		expect(element.style.left).toBe(`${target.offsetLeft}px`);
	});


	test('should align element to the bottom right of target', () => {
		utils.alignItem({ element, target, alignH: 'right', viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe(`${target.offsetTop + target.offsetHeight}px`);
		expect(element.style.left).toBe(`${target.offsetLeft + target.offsetWidth - element.offsetWidth}px`);
	});


	test('should align element to the top left of target', () => {
		utils.alignItem({ element, target, alignV: 'top', viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe('0px');
		expect(element.style.left).toBe(`${target.offsetLeft}px`);
	});


	test('should align element to the top right of target', () => {
		utils.alignItem({ element, target, alignH: 'right', alignV: 'top', viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe('0px');
		expect(element.style.left).toBe(`${target.offsetLeft + target.offsetWidth - element.offsetWidth}px`);
	});


	test('should align element to the bottom left of contextmenu event', () => {
		const event = new Event('contextmenu');
		event.x = 100;
		event.y = 200;
		utils.alignItem({ element, target: event, offsetV: 0, offsetH: 0, viewportPadding: 0 });
		expect(element.style.top).toBe(`${event.y}px`);
		expect(element.style.left).toBe(`${event.x}px`);
	});


	test('should align element to the bottom left of longpress event', () => {
		const event = new CustomEvent('longpress', { detail: { x: 100, y: 200 } });
		utils.alignItem({ element, target: event, offsetV: 0, offsetH: 0, viewportPadding: 0 });

		expect(element.style.top).toBe(`${event.detail.y}px`);
		expect(element.style.left).toBe(`${event.detail.x}px`);
	});


	test('should not align element if element or target is not provided', () => {
		utils.alignItem({ element: null, target });
		expect(element.style.top).toBe('');
		expect(element.style.left).toBe('');

		utils.alignItem({ element, target: null });
		expect(element.style.top).toBe('');
		expect(element.style.left).toBe('');

		utils.alignItem({ element: null, target: null });
		expect(element.style.top).toBe('');
		expect(element.style.left).toBe('');
	});
});


describe('isColorDark', () => {
	it('returns true for dark colors', () => {
		expect(utils.isColorDark('#333333')).toBe(true);
		expect(utils.isColorDark('#000000')).toBe(true);
	});

	it('returns false for light colors', () => {
		expect(utils.isColorDark('#ffffff')).toBe(false);
		expect(utils.isColorDark('#cccccc')).toBe(false);
	});

	it('handles shorthand hex colors', () => {
		expect(utils.isColorDark('#333')).toBe(true);
		expect(utils.isColorDark('#fff')).toBe(false);
	});

	it('handles invalid hex colors', () => {
		expect(utils.isColorDark('not a hex color')).toBe(false);
		expect(utils.isColorDark('#12345')).toBe(false);
		expect(utils.isColorDark('#gggggg')).toBe(false);
	});
});
