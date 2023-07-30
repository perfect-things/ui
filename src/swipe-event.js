let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

let MIN_DISTANCE = 100;


function gestureType () {
	const delx = touchendX - touchstartX;
	const dely = touchendY - touchstartY;
	if (Math.abs(delx) > Math.abs(dely)) {
		if (Math.abs(delx) < MIN_DISTANCE) return;
		if (delx > 0) return 'Right';
		return 'Left';
	}
	if (Math.abs(delx) < Math.abs(dely)) {
		if (Math.abs(dely) < MIN_DISTANCE) return;
		if (dely > 0) return 'Down';
		return 'Up';
	}
}


function onTouchStart (e) {
	// touchstartX = e.changedTouches[0].screenX;
	// touchstartY = e.changedTouches[0].screenY;
	touchstartX = e.clientX;
	touchstartY = e.clientY;
}


function onTouchEnd (e) {
	// touchendX = e.changedTouches[0].screenX;
	// touchendY = e.changedTouches[0].screenY;
	touchendX = e.clientX;
	touchendY = e.clientY;
	const type = gestureType();
	if (type) fireEvent(e, type);
}


function fireEvent (originalEvent, type) {
	const event = new CustomEvent('swipe' + type, {
		bubbles: true,
		cancelable: true,
		detail: {}
	});
	originalEvent.target.dispatchEvent(event);
}


export function initSwipe (minDistance = 100) {
	if (window['swipeEventInitialised']) return;

	MIN_DISTANCE = minDistance;
	// check if we're using a touch screen
	const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator['msMaxTouchPoints'] > 0));
	const hasPointerEvents = (('PointerEvent' in window) || (navigator && 'msPointerEnabled' in navigator));

	// switch to pointer events or touch events if using a touch screen
	const mouseDown = isTouch ? 'touchstart' : hasPointerEvents ? 'pointerdown' : 'mousedown';
	const mouseUp = isTouch ? 'touchend' : hasPointerEvents ? 'pointerup' : 'mouseup';

	document.addEventListener(mouseDown, onTouchStart, false);
	document.addEventListener(mouseUp, onTouchEnd, false);

	window['swipeEventInitialised'] = true;
}
