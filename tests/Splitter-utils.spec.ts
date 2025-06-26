import { screen } from '@testing-library/dom';
import { expect, test } from 'vitest';

import './helpers/utils';
import * as utils from '../src/splitter/utils.js';



test('Splitter-utils - getFlexFlow', () => {
	const div = document.createElement('div');
	div.style.flexDirection = 'row-reverse';
	const flow = utils.getFlexFlow(div);
	expect(flow).toBe('row');
});


test('Splitter-utils - getCSSvalueInPx', () => {
	const div = document.createElement('div');
	div.style.minWidth = '100px';
	div.style.minHeight = '100px';
	div.style.maxWidth = '100px';
	div.style.maxHeight = '100px';

	const minW = utils.getCSSvalueInPx(div, 'minWidth');
	const minH = utils.getCSSvalueInPx(div, 'minHeight');
	const maxW = utils.getCSSvalueInPx(div, 'maxWidth');
	const maxH = utils.getCSSvalueInPx(div, 'maxHeight');

	expect(minW).toBe(100);
	expect(minH).toBe(100);
	expect(maxW).toBe(100);
	expect(maxH).toBe(100);
});


test('Splitter-utils - getCSSvalueInPx', () => {
	const div = document.createElement('div');
	div.style.minWidth = '100px';
	div.style.minHeight = '100px';
	div.style.maxWidth = '100px';
	div.style.maxHeight = '100px';

	const minW = utils.minWidth(div);
	const minH = utils.minHeight(div);
	const maxW = utils.maxWidth(div);
	const maxH = utils.maxHeight(div);

	expect(minW).toBe(100);
	expect(minH).toBe(100);
	expect(maxW).toBe(100);
	expect(maxH).toBe(100);
});


test('Splitter-utils - innerWidth, innerHeight', () => {
	const w = 100;
	const h = 100;
	const style = `width: ${w}px; height: ${h}px; padding: 10px; border: 1px solid black;`;
	document.body.innerHTML = `<div title="test-div" style="${style}">Example</div>`;

	const div = screen.getByTitle('test-div');
	// @ts-ignore
	div.getBoundingClientRect = () => ({ width: w, height: h, top: 0, left: 0, right: 0, bottom: 0, });

	const width = utils.innerWidth(div);
	const height = utils.innerHeight(div);
	expect(width).toBe(78);
	expect(height).toBe(78);
});
