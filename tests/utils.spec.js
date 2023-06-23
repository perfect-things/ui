import './helpers/utils';
import * as util from '../src/utils';
import { screen } from '@testing-library/dom';
import { get } from 'svelte/store';



test('util - matchMedia', () => {
	expect(get(util.ANIMATION_SPEED)).toStrictEqual(200);
});


test('util - animate', async () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	// spy on div.animate
	const spy = jest.spyOn(div, 'animate');
	await util.animate(div, {}, {});
	expect(spy).toHaveBeenCalled();
});


test('util - pluckOne', () => {
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	const objRes = { a: 1, c: 3 };
	const plucked = util.pluck(obj, ['a', 'c']);
	expect(plucked).toEqual(objRes);

	const pluckedSimple = util.pluck(obj, 'a');
	expect(pluckedSimple).toEqual(objRes.a);

	const pluckedEmpty = util.pluck();
	expect(pluckedEmpty).toEqual({});
});


test('util - mouse events', () => {
	const e = { type: 'touch', touches: [{ clientX: 100, clientY: 100 }], clientX: 200, clientY: 200 };
	const x = util.getMouseX(e);
	const y = util.getMouseY(e);
	expect(x).toBe(100);
	expect(y).toBe(100);

	e.type = 'click';
	const x2 = util.getMouseX(e);
	const y2 = util.getMouseY(e);
	expect(x2).toBe(200);
	expect(y2).toBe(200);

	const [x3, y3] = util.getMouseXY(e);
	expect(x3).toBe(200);
	expect(y3).toBe(200);
});


test('util - getFlexFlow', () => {
	const div = document.createElement('div');
	div.style.flexDirection = 'row-reverse';
	const flow = util.getFlexFlow(div);
	expect(flow).toBe('row');
});


test('util - getCSSvalueInPx', () => {
	const div = document.createElement('div');
	div.style.minWidth = '100px';
	div.style.minHeight = '100px';
	div.style.maxWidth = '100px';
	div.style.maxHeight = '100px';

	const minW = util.minWidth(div);
	const minH = util.minHeight(div);
	const maxW = util.maxWidth(div);
	const maxH = util.maxHeight(div);

	expect(minW).toBe(100);
	expect(minH).toBe(100);
	expect(maxW).toBe(100);
	expect(maxH).toBe(100);
});


test('util - innerWidth', async () => {
	const w = 100;
	const h = 100;
	const style = `width: ${w}px; height: ${h}px; padding: 10px; border: 1px solid black;`;
	document.body.innerHTML = `<div title="test-div" style="${style}">Example</div>`;

	const div = screen.getByTitle('test-div');
	div.getBoundingClientRect = () => ({ width: w, height: h, top: 0, left: 0, right: 0, bottom: 0, });

	const width = util.innerWidth(div);
	const height = util.innerHeight(div);
	expect(width).toBe(78);
	expect(height).toBe(78);
});


test('util - guid', () => {
	const id = util.guid();
	expect(id).toBeTruthy();
});


test('util - roundAmount', () => {
	const amount = 123.456;
	const rounded = util.roundAmount(amount);
	expect(rounded).toBe(123.46);
});


test('util - blink', () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	const spy = jest.spyOn(div, 'animate');
	util.blink(div);
	expect(spy).toHaveBeenCalled();
});
