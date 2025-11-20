import type { ClassValue } from 'svelte/elements';


export const THEME_STORAGE_KEY = 'ui-theme';


export type Theme = 'auto' | 'light' | 'dark';


export interface ThemeSwitcherProps {
	class?: ClassValue;
	round?: boolean;
	title?: string;
	value?: Theme;
}
