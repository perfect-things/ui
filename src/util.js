// Grab the prefers reduced media query.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const shouldReduce = (!reducedMotion || reducedMotion.matches);
export const ANIMATION_SPEED = shouldReduce ? 0 : 200;


// native js animation
export function animate (el, from, to, _options = {}) {
	const dflt = { duration: ANIMATION_SPEED, easing: 'ease-out', fill: 'forwards' };
	const opts = Object.assign({}, dflt, _options);

	return new Promise(resolve => {
		requestAnimationFrame(() => {
			const anim = el.animate([from, to], opts);
			anim.oncancel = resolve;
			anim.onfinish = resolve;
		});
	});
}


export const FOCUSABLE_SELECTOR = 'a[href],button:not([disabled]),iframe:not([disabled]),input:not([disabled]),' +
	'select:not([disabled]),textarea:not([disabled]),[contentEditable],[tabindex]';


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

export function uuid () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


export function roundAmount (val, precision = 2) {
	const multiplier = Math.pow(10, precision);
	return Math.round(val * multiplier) / multiplier;
}
