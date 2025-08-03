import type { Theme } from './types';

import { THEMES, THEME_STORAGE_KEY } from './types';
import { UI } from '../utils';



let initialised = false;
let stored: Theme = THEMES.AUTO;
let prefersDark: boolean = UI.PREFERS_DARK;
let effectiveTheme: Theme;
export const themeObserver = new EventTarget();


/**
 * Initializes the theme switcher by setting up event listeners and resolving the initial theme.
 * This function should be called once, typically when the application starts.
 * (It will not re-initialize if already called.)
 */
export function initThemes () {
	if (initialised) return;
	stored = localStorage.getItem(THEME_STORAGE_KEY) || THEMES.AUTO;
	// storage event is only picked up if triggered in another tab
	window.addEventListener('storage', onStorageChange);

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	media.addEventListener('change', onPrefsChange);
	initialised = true;
	resolveTheme();
}


/**
 * Gets the current theme from localStorage.
 * @returns The current theme.
 */
export function getCurrentTheme (): Theme {
	return stored;
}

/**
 * Gets the effective theme based on the stored theme and the user's preference.
 * If the stored theme is 'auto', it will return 'dark' or 'light'
 * based on the user's system preference.
 * @returns The effective theme.
 */
export function getEffectiveTheme (): Theme {
	if (stored !== THEMES.AUTO) return stored;
	return prefersDark ? THEMES.DARK : THEMES.LIGHT;
}


/**
 * Saves the current theme to localStorage.
 * @param theme
 */
export function setCurrentTheme (theme: Theme) {
	if (theme === stored) return;
	const newValue = theme || THEMES.AUTO;
	localStorage.setItem(THEME_STORAGE_KEY, newValue);

	// storage event is only picked up by other tabs, so we need to
	// manually dispatch a storage event to notify the current tab
	const ev = new Event('storage') as any;
	ev.key = THEME_STORAGE_KEY;
	ev.newValue = newValue;
	window.dispatchEvent(ev);
}



function onStorageChange (e: StorageEvent) {
	if (e.key === THEME_STORAGE_KEY) {
		stored = e.newValue || THEMES.AUTO;
		resolveTheme();
	}
}


function onPrefsChange (query: MediaQueryListEvent) {
	prefersDark = query && query.matches;
	resolveTheme();
}


function resolveTheme () {
	const themesClassNames = Object.values(THEMES)
		.filter(v => v !== THEMES.AUTO)
		.map(theme => 'theme-' + theme);
	document.documentElement.classList.remove(...themesClassNames);

	effectiveTheme = getEffectiveTheme();
	document.documentElement.classList.add('theme-' + effectiveTheme);

	themeObserver.dispatchEvent(new CustomEvent('change', {
		detail: { theme: stored, effectiveTheme }
	}));

}
