import { waitForTimeout } from './helpers/utils';
import * as util from '../src/util';
import { screen } from '@testing-library/dom';



test('util - matchMedia', () => {
	expect(util.ANIMATION_SPEED).toStrictEqual(200);
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
	const style = 'width: 1000px; height: 1000px; padding: 10px; border: 1px solid black;';
	document.body.innerHTML = `<div title="test-div" style="${style}">Example</div>`;

	const div = screen.getByTitle('test-div');
	await waitForTimeout();

	console.log(div.getBoundingClientRect(), div.outerHTML);
	// const width = util.innerWidth(div);
	// expect(width).toBe(78);
});
