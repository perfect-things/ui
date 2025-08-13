import { DEFAULT_ANIMATION_SPEED, FOCUSABLE_SELECTOR } from './constants';
import { isMobile } from './utilities';
import { initKeyboardTracking } from './dom';

const MOBILE_CLASS = 'mobile';
const DESKTOP_CLASS = 'desktop';
const KEYBOARD_CLASS = 'ui-keyboard';


export const UI = $state({
	initialised: false,
	ANIMATION_SPEED: DEFAULT_ANIMATION_SPEED,
	PREFERS_DARK: false,
	FOCUSABLE_SELECTOR,
	isMobile: isMobile(),
});




export function initUI () {
	if (UI.initialised) return;

	document.documentElement.classList.add(UI.isMobile ? MOBILE_CLASS : DESKTOP_CLASS);
	initKeyboardTracking(KEYBOARD_CLASS);

	UI.initialised = true;
}




function setReducedMotion (query) {
	UI.ANIMATION_SPEED = (!query || query.matches) ? 0 : DEFAULT_ANIMATION_SPEED;
}

function setPrefersDark (query) {
	UI.PREFERS_DARK = query && query.matches;
}


if (window.matchMedia) {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	reducedMotion.addEventListener('change', setReducedMotion);
	setReducedMotion(reducedMotion);

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	prefersDark.addEventListener('change', setPrefersDark);
	setPrefersDark(prefersDark);
}
