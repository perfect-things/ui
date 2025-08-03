import type { ClassValue } from 'svelte/elements';

export const THEMES = {
	AUTO: 'auto',
	LIGHT: 'light',
	DARK: 'dark'
};

export const THEME_STORAGE_KEY = 'ui-theme';


export type Theme = typeof THEMES[keyof typeof THEMES];

export interface ThemeSwitcherProps {
	class?: ClassValue;
	round?: boolean;
	title?: string;
	value?: Theme;
}
