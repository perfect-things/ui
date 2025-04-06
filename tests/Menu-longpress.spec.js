import initLongPress from '../src/menu/longpress';
import jest from 'jest-mock';


describe('Menu longpress functionality', () => {
	let mockEventListener;
	let originalAddEventListener;
	let longpressCallback;

	beforeEach(() => {
		originalAddEventListener = document.addEventListener;

		mockEventListener = jest.fn();
		document.addEventListener = mockEventListener;

		longpressCallback = jest.fn();
		document.body.addEventListener('longpress', longpressCallback);

		delete window.longPressEventInitialised;
	});

	afterEach(() => {
		document.addEventListener = originalAddEventListener;
		document.body.removeEventListener('longpress', longpressCallback);
	});


	test('initializes longpress event handlers', () => {
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

		const customCallback = jest.fn();
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
