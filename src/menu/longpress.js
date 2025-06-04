const maxDiffX = 10;    // max number of X pixels the mouse can move during long press before it is canceled
const maxDiffY = 10;    // max number of Y pixels the mouse can move during long press before it is canceled

// track number of pixels the mouse moves during long press
let startX = 0;         // mouse x position when timer started
let startY = 0;         // mouse y position when timer started

let EVENT_NAME = 'longpress';
let DELAY = 500;
let timer = null;



function fireLongPressEvent (originalEvent) {
	clearTimer();
	originalEvent = unifyEvent(originalEvent);

	const event = new CustomEvent(EVENT_NAME, {
		bubbles: true,
		cancelable: true,
		detail: {
			x: originalEvent.clientX,
			y: originalEvent.clientY
		}
	});
	originalEvent.target.dispatchEvent(event);
}


/**
 * consolidates mouse, touch, and Pointer events
 */
function unifyEvent (e) {
	if (e.changedTouches !== undefined) return e.changedTouches[0];
	return e;
}


function startTimer (e) {
	clearTimer();
	timer = setTimeout(() => fireLongPressEvent(e), DELAY);
}


function clearTimer () {
	if (!timer) return;
	clearTimeout(timer);
	timer = null;
}


/**
 * Starts the timer on mouse down and logs current position
 */
function mouseDownHandler (e) {
	if (e.pointerType === 'mouse' && e.button !== 0) return;
	e = unifyEvent(e);
	startX = e.clientX;
	startY = e.clientY;
	startTimer(e);
}


/**
 * If the mouse moves n pixels during long-press, cancel the timer
 */
function mouseMoveHandler (e) {
	e = unifyEvent(e);
	const diffX = Math.abs(startX - e.clientX);
	const diffY = Math.abs(startY - e.clientY);
	if (diffX >= maxDiffX || diffY >= maxDiffY) clearTimer();
}


export default function init (delay = 500, eventName = 'longpress') {
	// @ts-ignore
	if (window.longPressEventInitialised) return;

	DELAY = delay;
	EVENT_NAME = eventName;

	// check if we're using a touch screen
	const isTouch = (
		(('ontouchstart' in window) && window.ontouchstart) ||
		(navigator.maxTouchPoints > 0) ||
		// @ts-ignore
		(navigator.msMaxTouchPoints > 0)
	);
	const hasPointerEvents = (('PointerEvent' in window) || (navigator && 'msPointerEnabled' in navigator));

	// switch to pointer events or touch events if using a touch screen
	const mouseDown = isTouch ? 'touchstart' : hasPointerEvents ? 'pointerdown' : 'mousedown';
	const mouseUp = isTouch ? 'touchend' : hasPointerEvents ? 'pointerup' : 'mouseup';
	const mouseMove = isTouch ? 'touchmove' : hasPointerEvents ? 'pointermove' : 'mousemove';

	// hook events that clear a pending long press event
	document.addEventListener(mouseDown, mouseDownHandler, true);
	document.addEventListener(mouseMove, mouseMoveHandler, true);
	document.addEventListener(mouseUp, clearTimer, true);
	// document.addEventListener('wheel', clearTimer, true);
	document.addEventListener('scroll', clearTimer, true);
	// @ts-ignore
	window.longPressEventInitialised = true;
}
