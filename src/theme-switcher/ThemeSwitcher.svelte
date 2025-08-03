<!--
@component ## ThemeSwitcher

A component to switch between light, dark and system themes.

@example
```svelte
<ThemeSwitcher round/>
```
@see {@link https://ui.perfectthings.dev/#ThemeSwitcher ThemeSwitcher Docs} for more info.
-->

<ButtonToggle
	class={['theme-switcher', className]}
	{title}
	{round}
	{items}
	{value}
	{onchange}/>


<script lang="ts">
import type { ThemeSwitcherProps } from './types';
import { onMount } from 'svelte';
import { ButtonToggle } from '../input/button-toggle';
import { THEME_STORAGE_KEY, THEMES } from './types';
import { getCurrentTheme, initThemes, setCurrentTheme } from './utils';

const items = [
	{ value: THEMES.LIGHT, title: 'Switch theme to Light', icon: 'sun' },
	{ value: THEMES.AUTO, title: 'Switch theme to Auto', icon: 'circle' },
	{ value: THEMES.DARK, title: 'Switch theme to Dark', icon: 'moon' },
];


let {
	class: className = '',
	round = false,
	title = 'Theme',
	value = $bindable(THEMES.AUTO),
}: ThemeSwitcherProps = $props();



onMount(() => {
	initThemes();
	value = getCurrentTheme();
	window.addEventListener('storage', onStorageChange);
});


function onStorageChange (e: StorageEvent) {
	if (e.key === THEME_STORAGE_KEY) {
		value = e.newValue;
	}
}


function onchange (e, { value: theme }) {
	setCurrentTheme(theme);
}


</script>
