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
	const allowClickEvent = originalEvent.target.dispatchEvent(event);

	if (!allowClickEvent) {
		// suppress the next click event if e.preventDefault() was called in longpress handler
		document.addEventListener('click', function suppressEvent (e) {
			document.removeEventListener('click', suppressEvent, true);
			cancelEvent(e);
		}, true);
	}
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
	clearTimeout(timer);
	timer = null;
}


function cancelEvent (e) {
	e.stopImmediatePropagation();
	e.preventDefault();
	e.stopPropagation();
}


/**
 * Starts the timer on mouse down and logs current position
 */
function mouseDownHandler (e) {
	startX = e.clientX;
	startY = e.clientY;
	startTimer(e);
}


/**
 * If the mouse moves n pixels during long-press, cancel the timer
 */
function mouseMoveHandler (e) {
	const diffX = Math.abs(startX - e.clientX);
	const diffY = Math.abs(startY - e.clientY);
	if (diffX >= maxDiffX || diffY >= maxDiffY) clearTimer();
}


export default function init (delay = 500, eventName = 'longpress') {
	if (window.longPressEventInitialised) return;

	DELAY = delay;
	EVENT_NAME = eventName;

	// check if we're using a touch screen
	const hasPointerEvents = (('PointerEvent' in window) || (window.navigator && 'msPointerEnabled' in window.navigator));
	const isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

	// switch to pointer events or touch events if using a touch screen
	const mouseDown = hasPointerEvents ? 'pointerdown' : isTouch ? 'touchstart' : 'mousedown';
	const mouseUp = hasPointerEvents ? 'pointerup' : isTouch ? 'touchend' : 'mouseup';
	const mouseMove = hasPointerEvents ? 'pointermove' : isTouch ? 'touchmove' : 'mousemove';

	// hook events that clear a pending long press event
	document.addEventListener(mouseDown, mouseDownHandler, true);
	document.addEventListener(mouseMove, mouseMoveHandler, true);
	document.addEventListener(mouseUp, clearTimer, true);
	document.addEventListener('wheel', clearTimer, true);
	document.addEventListener('scroll', clearTimer, true);
	window.longPressEventInitialised = true;
}
