import './helpers/utils';
import { getNextNotification } from '../src/notification-center/utils';


describe('getNextNotification', () => {
	let el;

	beforeEach(() => {
		el = document.createElement('div');
		el.innerHTML = `
			<div class="notification" data-id="1"></div>
			<div class="notification" data-id="2"></div>
			<div class="notification" data-id="3"></div>
			`;
		document.body.appendChild(el);
	});

	test('should return the next notification element when given the current element and ID', () => {
		const nextEl = getNextNotification(el, '1');
		expect(nextEl).toBe(el.querySelector('[data-id="2"]'));
	});

	test('should return the previous notification element when given the current element and ID', () => {
		const prevEl = getNextNotification(el, '2');
		expect(prevEl).toBe(el.querySelector('[data-id="3"]'));
	});

	test('should return the first notification element when given the last element and ID', () => {
		const firstEl = getNextNotification(el, '3');
		expect(firstEl).toBe(el.querySelector('[data-id="2"]'));
	});

	test('should return first when given an invalid ID', () => {
		const nextEl = getNextNotification(el, 'invalid');
		expect(nextEl).toBe(el.querySelector('[data-id="1"]'));
	});

	test('should return undefined when given an empty element', () => {
		const emptyEl = getNextNotification(null, '1');
		expect(emptyEl).toBeUndefined();
	});

	test('should return undefined when given an element with no notifications', () => {
		const emptyEl = document.createElement('div');
		const noNotificationsEl = getNextNotification(emptyEl, '1');
		expect(noNotificationsEl).toBeUndefined();
	});
});
