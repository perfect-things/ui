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

export const ANIMATION_SPEED = writable(300);
export const PREFERS_DARK = writable(false);

const setReducedMotion = query => ANIMATION_SPEED.set((!query || query.matches) ? 0 : 200);
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

	return new Promise(resolve => {
		requestAnimationFrame(() => {
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


export function deepCopy (o) {
	return structuredClone(o);
}


export function empty (v) {
	if (v === null || typeof v === 'undefined') return true;
	if (v === '') return true;
	if (Array.isArray(v) && v.length === 0) return true;
	if (typeof v === 'object' && Object.keys(v).length === 0) return true;
	return false;
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
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


export function getMouseX (e) {
	return (e.type.includes('touch')) ? e.touches[0].clientX : e.clientX;
}

export function getMouseY (e) {
	return (e.type.includes('touch')) ? e.touches[0].clientY : e.clientY;
}

export function getMouseXY (e) {
	return [getMouseX(e), getMouseY(e)];
}


export function isMobile () {
	const ua = navigator.userAgent;

	let regex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
	if (regex.test(ua)) return true;

	regex = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
	if (regex.test(ua.slice(0, 4))) return true;

	return false;
}


function pluckOne (obj, key) {
	if (key in obj) return obj[key];
	for (const k in obj) {
		if (k.startsWith(key)) return obj[k];
	}
}


function pluckMany (obj, keys) {
	const newObj = {};
	keys.forEach(key => {
		if (key in obj) newObj[key] = obj[key];
		else {
			for (const k in obj) {
				if (k.startsWith(key)) newObj[k] = obj[k];
			}
		}
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
	return Math.round(val * multiplier) / multiplier;
}


export function timeAgo (date, now) {
	if (!date || !now) return '';
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

	const [d, t] = new Date(date).toISOString().split('T');
	return `${d} ${t.slice(0, 5)}`;		// 2020-01-01 12:34
}


export function alignItem ({
	element,
	target,
	alignH = 'left',
	offsetH = 0,
	alignV = 'bottom',
	offsetV = 2,
	viewportPadding = 10,
	setMinWidthToTarget = false,
}) {
	if (!element || !target) return;
	const winH = window.visualViewport.height || window.innerHeight;
	const winW = window.visualViewport.width || window.innerWidth;

	let targetBox = {};
	let top, left;
	let position = alignV;

	// target is a context | longpress event
	if (target instanceof Event && (target.type === 'contextmenu' || target.type === 'longpress')) {
		if (target.type === 'contextmenu') {
			targetBox = { top: target.y, left: target.x, };
		}
		else if (target.type === 'longpress') {
			targetBox = { top: target.detail.y, left: target.detail.x, };
		}
		targetBox.height = 0;
		targetBox.width = 0;
	}

	// target is a click event on a button
	else if (target.type === 'click') targetBox = target.target.getBoundingClientRect();

	// target is an element
	else targetBox = target.getBoundingClientRect();


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
	element.style.maxHeight = Math.max(spaceAbove, spaceBelow) + 'px';
	const elementBox = element.getBoundingClientRect();

	if (alignV === 'top' || spaceBelow < elementBox.height) {
		top = winH - elementBox.height - viewportPadding;
		if (alignV === 'top' || top < elementBox.y) {
			top = targetBox.top - elementBox.height - offsetV;
			position = 'top';
		}
		element.style.top = top + window.scrollY + 'px';
	}

	// check if the menu is off the right side of the screen
	if (elementBox.x > winW - elementBox.width - viewportPadding) {
		left = winW - elementBox.width - viewportPadding;
		if (left < 0) left = viewportPadding;
		element.style.left = left + window.scrollX + 'px';
	}

	// check if the menu is off the left side of the screen
	if (elementBox.x < viewportPadding) {
		element.style.left = viewportPadding + window.scrollX + 'px';
	}

	return position;
}



function isScrollable (node) {
	const overflow = getComputedStyle(node, null).overflowX;
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
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) return;
	if (isScrollable(node)) return true;
	while (node = node.parentElement) {
		if (isScrollable(node)) return true;
	}
	return false;
}
