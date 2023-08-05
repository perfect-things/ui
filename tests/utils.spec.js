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
