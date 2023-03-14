export const isTouchDevice = 'ontouchstart' in document.documentElement;


export function getMouseX (e) {
	return (e.type.includes('touch')) ? e.touches[0].clientX : e.clientX;
}


function outerWidth (el) {
	return el.getBoundingClientRect().width;
}


function innerWidth (el) {
	const css = getComputedStyle(el);
	const borders = parseFloat(css.borderLeftWidth) + parseFloat(css.borderRightWidth);
	const padding = parseFloat(css.paddingLeft) + parseFloat(css.paddingRight);
	return el.getBoundingClientRect().width - borders - padding;
}


export function initialMeasure (el) {
	const isHidden = el.offsetParent === null;
	if (isHidden) {
		el = el.cloneNode(true);
		document.body.appendChild(el);
	}
	const handle = el.querySelector('.toggle-handle');
	const maxX = innerWidth(el);
	const minX = outerWidth(handle);
	if (isHidden && el) el.remove();

	return { maxX, minX };
}
