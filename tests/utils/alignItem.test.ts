import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import * as utils from '../../src/utils';
import '../helpers/utils';



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
		utils.alignItem({ element, event: target, viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe(`${target.offsetTop + target.offsetHeight}px`);
		expect(element.style.left).toBe(`${target.offsetLeft}px`);
	});


	test('should align element to the bottom right of target', () => {
		utils.alignItem({ element, event: target, alignH: 'right', viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe(`${target.offsetTop + target.offsetHeight}px`);
		expect(element.style.left).toBe(`${target.offsetLeft + target.offsetWidth - element.offsetWidth}px`);
	});


	test('should align element to the top left of target', () => {
		utils.alignItem({ element, event: target, alignV: 'top', viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe('0px');
		expect(element.style.left).toBe(`${target.offsetLeft}px`);
	});


	test('should align element to the top right of target', () => {
		utils.alignItem({ element, event: target, alignH: 'right', alignV: 'top', viewportPadding: 0, offsetV: 0, offsetH: 0 });
		expect(element.style.top).toBe('0px');
		expect(element.style.left).toBe(`${target.offsetLeft + target.offsetWidth - element.offsetWidth}px`);
	});


	test('should align element to the bottom left of contextmenu event', () => {
		const event = new Event('contextmenu');
		// @ts-ignore
		event.x = 100;
		// @ts-ignore
		event.y = 200;
		utils.alignItem({ element, event, offsetV: 0, offsetH: 0, viewportPadding: 0 });
		// @ts-ignore
		expect(element.style.top).toBe(`${event.y}px`);
		// @ts-ignore
		expect(element.style.left).toBe(`${event.x}px`);
	});


	test('should align element to the bottom left of longpress event', () => {
		const event = new CustomEvent('longpress', { detail: { x: 100, y: 200 } });
		utils.alignItem({ element, event, offsetV: 0, offsetH: 0, viewportPadding: 0 });

		expect(element.style.top).toBe(`${event.detail.y}px`);
		expect(element.style.left).toBe(`${event.detail.x}px`);
	});


	test('should not align element if element or target is not provided', () => {
		utils.alignItem({ element: null, event: target });
		expect(element.style.top).toBe('');
		expect(element.style.left).toBe('');

		utils.alignItem({ element, event: null });
		expect(element.style.top).toBe('');
		expect(element.style.left).toBe('');

		utils.alignItem({ element: null, event: null });
		expect(element.style.top).toBe('');
		expect(element.style.left).toBe('');
	});
});
