import { isMobile } from './utilities';
import { DEFAULT_ANIMATION_SPEED } from './constants';
import pkg from '../../package.json';


const MOBILE_CLASS = 'mobile';
const DESKTOP_CLASS = 'desktop';
const KEYBOARD_CLASS = 'ui-keyboard';
const keys = ['Escape', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'];

const UI_EVENT = {
	CHANGE: 'change'
};

type UIEventName = typeof UI_EVENT[keyof typeof UI_EVENT];
type Callback = (property: string, value: any) => void;

type UIState = {
	ANIMATION_SPEED: number;
	IS_MOBILE: boolean;
	PREFERS_DARK: boolean;
	VERSION: string;
	init: () => void;
	destroy: () => void;
	on: (topic: UIEventName, callback: Callback) => void;
	off: (topic: UIEventName, callback: Callback) => void;
	// fire: (topic: UIEventName, ...args: any[]) => void;
};

const _listeners: Record<UIEventName, Callback[]> = { CHANGE: [] };


export const UI: UIState = {} as UIState;
Object.defineProperties(UI, {
	_ANIMATION_SPEED: {
		value: DEFAULT_ANIMATION_SPEED,
		writable: true,
		enumerable: false,
		configurable: false
	},

	/**
	 * The animation speed in milliseconds.
	 * This will change based on user's OS setting (prefers-reduced-motion)
	 * If prefers-reduced-motion is enabled, this will be 0.
	 */
	ANIMATION_SPEED: {
		get (): number { return this._ANIMATION_SPEED; },
		enumerable: true,
		configurable: false
	},


	IS_MOBILE: {
		value: isMobile(),
		writable: false,
		enumerable: true,
		configurable: false
	},


	_PREFERS_DARK: {
		value: true,
		writable: true,
		enumerable: false,
		configurable: false
	},
	/**
	 * Boolean value that reflects the user's OS setting for dark mode.
	 * If the user has enabled dark mode, this will be true.
	 */
	PREFERS_DARK: {
		get (): boolean { return this._PREFERS_DARK; },
		enumerable: true,
		configurable: false
	},


	VERSION: {
		value: pkg.version,
		writable: false,      // cannot be reassigned
		enumerable: true,     // shows up in for...in / Object.keys
		configurable: false   // cannot delete or reconfigure
	},


	_INITIALISED: {
		value: false,
		writable: true,
		enumerable: false,
		configurable: false
	},

	init: {
		writable: false,
		enumerable: false,
		configurable: false,
		value () {
			if (this._INITIALISED) return;
			initPlatformClass();
			initKeyboardTracking();
			initMediaQueries();
			this._INITIALISED = true;
		},
	},

	destroy: {
		writable: false,
		enumerable: false,
		configurable: false,
		value () {
			if (!this._INITIALISED) return;
			removePlatformClass();
			stopKeyboardTracking();
			stopMediaQueries();
			this._INITIALISED = false;
		},
	},




	_listeners: {
		value: _listeners,
		writable: true,
		enumerable: false,
		configurable: false
	},
	on: {
		writable: false,
		enumerable: true,
		configurable: false,
		value (topic: UIEventName, callback: Callback) {
			if (!this._listeners[topic]) this._listeners[topic] = [];
			this._listeners[topic].push(callback);
		},
	},

	off: {
		writable: false,
		enumerable: true,
		configurable: false,
		value (topic: UIEventName, callback: Callback) {
			const cached = this._listeners[topic];
			const callbackStr = callback.toString();
			if (!cached) return;

			const idx = cached.findIndex(fn => fn.toString() === callbackStr);
			if (idx > -1) cached.splice(idx, 1);
		},
	},

	fire: {
		writable: false,
		enumerable: false,
		configurable: false,
		value (topic: UIEventName, ...args) {
			if (!this._listeners[topic]) return;
			this._listeners[topic].forEach(cb => {
				if (typeof cb === 'function') cb.apply(cb, args);
			});
		},
	},
});







/*** MOBILE/DESKTOP CLASS *************************************************************************/
function initPlatformClass () {
	removePlatformClass();
	document.documentElement.classList.add(UI.IS_MOBILE ? MOBILE_CLASS : DESKTOP_CLASS);
}

function removePlatformClass () {
	document.documentElement.classList.remove(MOBILE_CLASS, DESKTOP_CLASS);
}
/*** MOBILE/DESKTOP CLASS *************************************************************************/







/*** MEDIA QUERIES ********************************************************************************/
function setReducedMotion (query) {
	(UI as any)._ANIMATION_SPEED = (!query || query.matches) ? 0 : DEFAULT_ANIMATION_SPEED;
	// fire is not enumerable
	(UI as any).fire(UI_EVENT.CHANGE, 'ANIMATION_SPEED', UI.ANIMATION_SPEED);
}

function setPrefersDark (query) {
	(UI as any)._PREFERS_DARK = query && query.matches;
	// fire is not enumerable
	(UI as any).fire(UI_EVENT.CHANGE, 'PREFERS_DARK', UI.PREFERS_DARK);
}

function initMediaQueries () {
	if (!window.matchMedia) return;
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	reducedMotion.addEventListener('change', setReducedMotion);
	setReducedMotion(reducedMotion);

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	prefersDark.addEventListener('change', setPrefersDark);
	setPrefersDark(prefersDark);
}


function stopMediaQueries () {
	if (!window.matchMedia) return;

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	reducedMotion.removeEventListener('change', setReducedMotion);

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	prefersDark.removeEventListener('change', setPrefersDark);
}
/*** MEDIA QUERIES ********************************************************************************/






/*** KEYBOARD TRACKING ****************************************************************************/
const setKeyboardMode = () => document.documentElement.classList.add(KEYBOARD_CLASS);
const unsetKeyboardMode = () => document.documentElement.classList.remove(KEYBOARD_CLASS);
const isKey = (key) => keys.includes(key);

const onkeydown = (e) => { if (isKey(e.key)) setKeyboardMode(); };


export function initKeyboardTracking () {
	window.addEventListener('keydown', onkeydown, { passive: true, capture: true });
	window.addEventListener('mousedown', unsetKeyboardMode, { passive: true, capture: true });
	window.addEventListener('pointerdown', unsetKeyboardMode, { passive: true, capture: true });
	window.addEventListener('touchstart', unsetKeyboardMode, { passive: true, capture: true });
}


export function stopKeyboardTracking () {
	window.removeEventListener('keydown', onkeydown, { capture: true });
	window.removeEventListener('mousedown', unsetKeyboardMode, { capture: true });
	window.removeEventListener('pointerdown', unsetKeyboardMode, { capture: true });
	window.removeEventListener('touchstart', unsetKeyboardMode, { capture: true });
}
/*** KEYBOARD TRACKING ****************************************************************************/
