import { writable, get } from 'svelte/store';


export const FOCUSABLE_SELECTOR = [
	'a[href]:not([disabled])',
	'button:not([disabled])',
	'iframe:not([disabled])',
	'input:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[contentEditable]',
	'[tabindex]:not(.focus-trap)', // warning: this will try to focus tabindex="-1" elements
].join(',');

const DEFAULT_ANIMATION_SPEED = 200;
export const ANIMATION_SPEED = writable(DEFAULT_ANIMATION_SPEED);
export const PREFERS_DARK = writable(false);

const setReducedMotion = query => ANIMATION_SPEED.set((!query || query.matches) ? 0 : DEFAULT_ANIMATION_SPEED);
const setPrefersDark = query => PREFERS_DARK.set(query && query.matches);


if (window.matchMedia) {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	setReducedMotion(reducedMotion);
	reducedMotion.addEventListener('change', setReducedMotion);

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	setPrefersDark(prefersDark);
	prefersDark.addEventListener('change', setPrefersDark);
}


// native js animation
export function animate (el, from, to, _options = {}) {
	const dflt = { duration: get(ANIMATION_SPEED), easing: 'ease-out', fill: 'forwards' };
	const opts = Object.assign({}, dflt, _options);

	return new Promise<void>(resolve => {
		requestAnimationFrame(() => {
			if (!el || !el.animate) return resolve();

			const anim = el.animate([from, to], opts);
			anim.oncancel = resolve;
			anim.onfinish = resolve;
		});
	});
}


export function blink (el, duration = 160) {
	return animate(el,
		{ opacity: 1 },
		{ opacity: 0.5 },
		{ duration: duration / 2, fill: 'backwards' }
	);
}


export function debounce (func, timeout = 300) {
	let timer;
	return function (...args) { // Use regular function instead of arrow function
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), timeout);
	};
}


export function deepCopy (o) {
	if (!o || typeof o !== 'object') return o;
	if (Array.isArray(o)) {
		const newO = [];
		for (let i = 0; i < o.length; i += 1) {
			const val = !o[i] || typeof o[i] !== 'object' ? o[i] : deepCopy(o[i]);
			newO[i] = val === undefined ? null : val;
		}
		return newO;
	}
	if (o instanceof Date) return new Date(o);
	if (o instanceof RegExp) return new RegExp(o);
	if (o instanceof Map) return new Map([...o]);
	if (o instanceof Set) return new Set([...o]);

	const newO = {};
	for (const i of Object.keys(o)) {
		const val = !o[i] || typeof o[i] !== 'object' ? o[i] : deepCopy(o[i]);
		if (val === undefined) continue;
		newO[i] = val;
	}
	return newO;
}


/**
 * Get a value from an object for a given path
 * @param obj {object}
 * @param path {string} - e.g. child[4]['some name'][2].property
 * @param defaultValue {*}
 * @returns {*}
 */
export function getValueAtPath (obj, path, defaultValue = null) {
	try {
		return path
			.replace(/^\./, '')                           // strip a leading dot
			.replace(/\[['"]?([\w\s]+)['"]?]/ig, '.$1')   // convert indexes to properties
			.split('.')
			.reduce((acc, key) => acc && acc[key], obj) || defaultValue;
	}
	catch {
		return defaultValue;
	}
}


/**
 * Set a value on an object for a given path.
 * @param obj
 * @param path
 * @param value
 * @returns {boolean}
 */
export function setValueAtPath (obj, path, value) {
	const keys = path
		.replace(/^\./, '')
		.replace(/\[['"]?([\w\s]+)['"]?]/ig, '.$1')
		.split('.');
	const lastKey = keys.pop();
	const lastObj = keys.reduce((acc, key) => {
		if (typeof acc[key] === 'object') return acc[key];
		return acc[key] = {};
	}, obj);
	if (!lastObj) return false;

	lastObj[lastKey] = value;
	return true; // Add this line
}


export function throttle (fn, delay = 300) {
	let lastCalled = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - lastCalled < delay) return;
		lastCalled = now;
		return fn(...args);
	};
}


export function empty (v) {
	if (v === null || typeof v === 'undefined') return true;
	if (v === '') return true;
	if (Array.isArray(v) && v.length === 0) return true;
	return (typeof v === 'object' && Object.keys(v).length === 0);
}


export function isset (v) {
	return typeof v !== 'undefined' && v !== null;
}


export function fuzzy (hay = '', s = '') {
	if (s.length === 0) return true;
	if (hay.length === 0) return false;
	if (s.length > hay.length) return false;
	if (s === hay) return true;
	hay = hay.toLowerCase();
	s = s.toLowerCase();
	let n = -1;
	for (const l of s) if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
}


export function guid () {
	if (window.crypto?.randomUUID) return window.crypto.randomUUID();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


export function getMouseX (e) {
	return (e.type.includes('touch')) ? e.changedTouches[0].clientX : e.clientX;
}

export function getMouseY (e) {
	return (e.type.includes('touch')) ? e.changedTouches[0].clientY : e.clientY;
}

export function getMouseXY (e) {
	return [getMouseX(e), getMouseY(e)];
}


export function isMobile () {
	const ua = navigator.userAgent;

	let regex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
	if (regex.test(ua)) return true;

	regex = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
	return regex.test(ua.slice(0, 4));
}


function pluckOne (obj, key) {
	if (key in obj) return obj[key];
}


function pluckMany (obj, keys) {
	const newObj = {};
	keys.forEach(key => {
		if (key in obj) newObj[key] = obj[key];
	});
	return newObj;
}


export function pluck (obj, keys) {
	if (!obj) return {};
	if (!Array.isArray(keys)) return pluckOne(obj, keys);
	return pluckMany(obj, keys);
}


export function roundAmount (val, precision = 2) {
	const multiplier = Math.pow(10, precision);
	return (Math.round(val * multiplier) / multiplier).toFixed(precision);
}


export function formatDate (date) {
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}


export function timeAgo (date, now) {
	if (!date) return '';
	now = now || new Date().getTime();
	let seconds = (now - +date) / 1000;
	const intervals = [
		{ label: 'year', seconds: 31536000 },
		{ label: 'month', seconds: 2592000 },
		{ label: 'day', seconds: 86400 },
		{ label: 'hour', seconds: 3600 },
		{ label: 'minute', seconds: 60 }
	];
	const chunks = [];
	while (seconds > 60) {
		const interval = intervals.find(i => i.seconds < seconds) || { seconds: 0, label: '' };
		const count = Math.floor(seconds / (interval.seconds || seconds));
		chunks.push(`${count} ${interval.label}${count !== 1 ? 's' : ''}`);
		seconds -= count * (interval.seconds || seconds);
	}
	if (!chunks.length) return 'just now';
	if (chunks.length === 1) return chunks[0] + ' ago';
	// return chunks.join(', ') + ' ago';

	// format the date to YYYY-MM-DD HH:mm
	return formatDate(date);
}


export function alignItem ({
	element,
	event,
	alignH = 'left',
	offsetH = 0,
	alignV = 'bottom',
	offsetV = 2,
	viewportPadding = 10,
	setMinWidthToTarget = false,
}) {
	if (!element || !event) return;
	const winH = window.visualViewport?.height || window.innerHeight;
	const winW = window.visualViewport?.width || window.innerWidth;

	let targetBox: { top: number; left: number; height: number; width: number };
	let top, left;
	let isLeft = false;
	let isRight = false;


	// event is a context | longpress event
	if (event.type === 'contextmenu' || event.type === 'longpress') {
		if (event.type === 'longpress' && event.detail) event = event.detail;
		targetBox = { top: event.y, left: event.x, height: 0, width: 0 };
	}

	// event is a click event on a button
	else if (event.type === 'click') targetBox = event.target.getBoundingClientRect();

	// event is an element
	else targetBox = event.getBoundingClientRect();


	top = targetBox.top + targetBox.height + offsetV;
	left = targetBox.left + offsetH;

	if (alignH === 'right') left += targetBox.width - element.offsetWidth;
	else if (alignH === 'center') {
		left = (targetBox.width - element.offsetWidth) / 2 + targetBox.left;
	}

	element.style.top = top + window.scrollY + 'px';
	element.style.left = left + window.scrollX + 'px';
	if (setMinWidthToTarget) element.style.minWidth = targetBox.width + 'px';



	// ensure it stays on screen
	const spaceAbove = targetBox.top - viewportPadding;
	const spaceBelow = winH - targetBox.top - targetBox.height - viewportPadding;
	const spaceBefore = targetBox.left - viewportPadding;
	const spaceAfter = winW - targetBox.left - targetBox.width - viewportPadding;

	element.style.maxHeight = Math.max(spaceAbove, spaceBelow) + 'px';
	let elementBox = element.getBoundingClientRect();

	if (alignV === 'left' && spaceBefore > elementBox.width) {
		isLeft = true;
		top = targetBox.top + ((targetBox.height - elementBox.height) / 2);
		left = Math.max(targetBox.left - elementBox.width, viewportPadding);
		element.style.top = top + window.scrollY + 'px';
		element.style.left = left + window.scrollX + 'px';
	}

	else if (alignV === 'right' && spaceAfter > elementBox.width) {
		isRight = true;
		top = targetBox.top + ((targetBox.height - elementBox.height) / 2);
		left = Math.max(targetBox.left + targetBox.width, viewportPadding);
		element.style.top = top + window.scrollY + 'px';
		element.style.left = left + window.scrollX + 'px';
	}

	else if ((alignV === 'top' && spaceAbove > elementBox.height) || spaceBelow < elementBox.height) {
		top = winH - elementBox.height - viewportPadding;
		if (alignV === 'top' || top < elementBox.y) {
			top = targetBox.top - elementBox.height - offsetV;
		}
		element.style.top = top + window.scrollY + 'px';
	}

	// check if the menu is off the right side of the screen
	const padding = alignH === 'center' ? viewportPadding * 2 : viewportPadding;
	if (winW < elementBox.x + elementBox.width + padding) {
		left = winW - elementBox.width - padding;
		if (left < 0) left = viewportPadding;
		left = left + window.scrollX;
	}

	elementBox = element.getBoundingClientRect();
	// check if the menu is off the left side of the screen
	if (elementBox.x < viewportPadding) {
		left = viewportPadding + window.scrollX;
	}
	element.style.left = left + 'px';
	element.style.maxWidth = `calc(100% - ${left + viewportPadding}px)`;

	if (isLeft || isRight) {
		if (isLeft) return 'left';
		if (isRight) return 'right';
	}

	// set the property for the tip offset
	// so when the popover is at the edge of the screen, and is offset left/right
	// from the original position, the tip will try to be centered on the target
	element.style.setProperty('--tip-offset', findTipOffset(targetBox, element));
	if (top > targetBox.top) return 'bottom';
	return 'top';
}


function findTipOffset (targetBox, element) {
	const elementBox = element.getBoundingClientRect();
	const targetCenter = targetBox.left + targetBox.width / 2;
	const elementCenter = elementBox.left + elementBox.width / 2;
	const elemWidth = elementBox.width ? elementBox.width / 100 : 1;
	const tOffset = 50 + (targetCenter - elementCenter) / elemWidth;
	// constrain tip to min 8% and max 93% to account for the border-radius
	const tooltipOffsetPercent = Math.max(8, Math.min(93, tOffset));
	const tooltipOffset = Math.round(tooltipOffsetPercent * elemWidth - 1);
	return `${tooltipOffset}px`;
}


function isScrollable (node) {
	const css = getComputedStyle(node, null);
	const overflow = css.overflowX || css.overflow;
	if (!/(auto|scroll)/.test(overflow)) return false;
	return (node.scrollWidth > node.clientWidth);
}

/**
 * Checks if any parent element is scrollable
 * Useful fot determining if an element can start a swipe gesture.
 * @param {HTMLElement} node
 * @returns boolean
 */
export function isInScrollable (node) {
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) return false;
	if (isScrollable(node)) return true;

	let parent = node.parentElement;
	while (parent) {
		if (isScrollable(parent)) return true;
		parent = parent.parentElement;
	}
	return false;
}


export function isColorDark (hex) {
	hex = (hex[0] === '#') ? hex.slice(1) : hex;
	if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	if (hex.length !== 6) return false;

	const r = parseInt(hex.substring(0, 2), 16); // red
	const g = parseInt(hex.substring(2, 4), 16); // green
	const b = parseInt(hex.substring(4, 6), 16); // blue
	if (isNaN(r) || isNaN(g) || isNaN(b)) return false;

	const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	return isNaN(brightness) ? false : brightness < 140;
}


export function isSymbol (txt) {
	const symbols = ['⌘', '⌥', '⇧', '⌃', '⌫', '⏎', '⎋'];
	return symbols.includes(txt);
}


export function replaceKeySymbols (txt) {
	return ('' + txt)
		.trim()
		.toUpperCase()
		.replace(/\+/g, '')
		.replace(/CMD|COMMAND/g, '⌘')
		.replace(/ALT|OPTION/g, '⌥')
		.replace(/SHIFT/g, '⇧')
		.replace(/CONTROL|CTRL/g, '⌃')
		.replace(/DELETE|DEL|BACKSPACE/g, '⌫')
		.replace(/ENTER|RETURN/g, '⏎')
		.replace(/ESCAPE|ESC/g, '⎋');
}
