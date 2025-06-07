import { get } from 'svelte/store';
import { ANIMATION_SPEED } from '../../src';


export function offsetHeight (el, value = 50) {
	Object.defineProperty(el, 'offsetHeight', { configurable: true, value });
}

export function offsetWidth (el, value = 50) {
	Object.defineProperty(el, 'offsetWidth', { configurable: true, value });
}

export function offsetTop (el, value = 50) {
	Object.defineProperty(el, 'offsetTop', { configurable: true, value });
}

export function offsetLeft (el, value = 50) {
	Object.defineProperty(el, 'offsetLeft', { configurable: true, value });
}

export function waitForTimeout (timeout) {
	timeout = typeof timeout === 'number' ? timeout : get(ANIMATION_SPEED) + 200;
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
