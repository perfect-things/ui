import jest from 'jest-mock';
import { get } from 'svelte/store';

import './helpers/utils';
import * as utils from '../src/utils';



test('utils - matchMedia', () => {
	expect(get(utils.ANIMATION_SPEED)).toStrictEqual(300);
});


test('utils - animate', async () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	// spy on div.animate
	const spy = jest.spyOn(div, 'animate');
	await utils.animate(div, {}, {});
	expect(spy).toHaveBeenCalled();
});


test('utils - blink', () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	const spy = jest.spyOn(div, 'animate');
	utils.blink(div);
	expect(spy).toHaveBeenCalled();
});


test('utils - deepCopy', () => {
	const obj = { a: 1, b: { c: 2 } };
	const obj2 = utils.deepCopy(obj);
	expect(obj2).toEqual(obj);
	expect(obj2).not.toBe(obj);
	expect(obj2.b).not.toBe(obj.b);
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
});


test('utils - mouse events', () => {
	const e = { type: 'touch', touches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
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
	expect(rounded).toBe(123.46);
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
