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
		utils.alignItem({ element, target, viewportPadding: 0 });
		expect(element.style.top).toBe(`${target.offsetTop + target.offsetHeight + 2}px`);
		expect(element.style.left).toBe(`${target.offsetLeft}px`);
	});


	test('should align element to the bottom right of target', () => {
		utils.alignItem({ element, target, alignH: 'right', viewportPadding: 0 });
		expect(element.style.top).toBe(`${target.offsetTop + target.offsetHeight + 2}px`);
		expect(element.style.left).toBe(`${target.offsetLeft + target.offsetWidth - element.offsetWidth}px`);
	});


	test('should align element to the top left of target', () => {
		utils.alignItem({ element, target, alignV: 'top', viewportPadding: 0 });
		expect(element.style.top).toBe('768px');	// discover why is this so
		expect(element.style.left).toBe(`${target.offsetLeft}px`);
	});


	test('should align element to the top right of target', () => {
		utils.alignItem({ element, target, alignH: 'right', alignV: 'top', viewportPadding: 0 });
		expect(element.style.top).toBe('768px');
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
