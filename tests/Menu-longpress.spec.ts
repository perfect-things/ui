import initLongPress from '../src/menu/longpress';
import { expect, test, vi, describe, beforeEach, afterEach } from 'vitest';


describe('Menu longpress functionality', () => {
	let mockEventListener;
	let originalAddEventListener;
	let longpressCallback;

	beforeEach(() => {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		originalAddEventListener = document.addEventListener;

		mockEventListener = vi.fn();
		document.addEventListener = mockEventListener;

		longpressCallback = vi.fn();
		document.body.addEventListener('longpress', longpressCallback);

		// @ts-expect-error custom property
		delete window.longPressEventInitialised;
	});

	afterEach(() => {
		document.addEventListener = originalAddEventListener;
		document.body.removeEventListener('longpress', longpressCallback);
	});


	test('initializes longpress event handlers', () => {
		// vi mocks touch events that break test on desktop
		delete window.ontouchstart;

		initLongPress();
		expect(mockEventListener).toHaveBeenCalledTimes(4);

		const eventTypes = mockEventListener.mock.calls.map(call => call[0]);
		expect(eventTypes).toContain('mousedown');
		expect(eventTypes).toContain('mousemove');
		expect(eventTypes).toContain('mouseup');
		expect(eventTypes).toContain('scroll');
	});


	test('initializes longpress with custom parameters', () => {
		const customDelay = 1000;
		const customEventName = 'customlongpress';

		const customCallback = vi.fn();
		document.body.addEventListener(customEventName, customCallback);

		initLongPress(customDelay, customEventName);

		expect(mockEventListener).toHaveBeenCalledTimes(4);
		document.body.removeEventListener(customEventName, customCallback);
	});


	test('initialization happens only once', () => {
		initLongPress();
		initLongPress();

		expect(mockEventListener).toHaveBeenCalledTimes(4);
	});
});
