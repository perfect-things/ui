import { writable, get } from 'svelte/store';

export const ANIMATION_SPEED = writable(200);
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


export function deepCopy (o) {
	return structuredClone(o);
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


export const FOCUSABLE_SELECTOR = 'a[href]:not([disabled]),button:not([disabled]),iframe:not([disabled]),input:not([disabled]),' +
	'select:not([disabled]),textarea:not([disabled]),[contentEditable],[tabindex]:not(.focus-trap)';


export function getMouseX (e) {
	return (e.type.includes('touch')) ? e.touches[0].clientX : e.clientX;
}

export function getMouseY (e) {
	return (e.type.includes('touch')) ? e.touches[0].clientY : e.clientY;
}

export function getMouseXY (e) {
	return [getMouseX(e), getMouseY(e)];
}


export function getFlexFlow (el) {
	const css = getComputedStyle(el);
	return css.flexDirection.replace('-reverse', '');
}

export function getCSSvalueInPx (el, name) {
	const css = getComputedStyle(el);
	return parseFloat(css[name]);
}

export const minWidth = (el) => getCSSvalueInPx(el, 'minWidth');
export const minHeight = (el) => getCSSvalueInPx(el, 'minHeight');
export const maxWidth = (el) => getCSSvalueInPx(el, 'maxWidth');
export const maxHeight = (el) => getCSSvalueInPx(el, 'maxHeight');


export function innerWidth (el) {
	const css = getComputedStyle(el);
	const borders = parseFloat(css.borderLeftWidth) + parseFloat(css.borderRightWidth);
	const padding = parseFloat(css.paddingLeft) + parseFloat(css.paddingRight);
	return el.getBoundingClientRect().width - borders - padding;
}


export function innerHeight (el) {
	const css = getComputedStyle(el);
	const borders = parseFloat(css.borderTopWidth) + parseFloat(css.borderBottomWidth);
	const padding = parseFloat(css.paddingTop) + parseFloat(css.paddingBottom);
	return el.getBoundingClientRect().height - borders - padding;
}

export function guid () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


export function roundAmount (val, precision = 2) {
	const multiplier = Math.pow(10, precision);
	return Math.round(val * multiplier) / multiplier;
}


export function blink (el, duration = 160) {
	return animate(el,
		{ opacity: 1 },
		{ opacity: 0.5 },
		{ duration: duration / 2, fill: 'backwards' }
	);
}


export function timeAgo (date, now) {
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
	return;
}


export function slideError (node) {
	const o = node.getBoundingClientRect().height;
	return {
		duration: get(ANIMATION_SPEED),
		css: (t) => `height: ${t * o}px`
	};
}
