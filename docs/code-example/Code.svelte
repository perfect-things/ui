{#if !notitle}
	{#if nohr === undefined}<hr>{/if}
	<h3>Example</h3>
{/if}

<div bind:this={hiddenBox} style="display: none;">{@render children?.()}</div>
{#if html}{@html html}
{:else}<code>{@render children?.()}</code>
{/if}

<script lang="ts">
import './Code.css';
import type { CodeProps } from './types';
import { onMount } from 'svelte';
import { getEffectiveTheme, themeObserver } from '../../src';
import { getHighlighter, THEMES } from './highlighter';

const {
	lang = 'svelte',
	notitle = false,
	nohr = undefined,
	children
}: CodeProps = $props();

let hiddenBox = $state<HTMLElement | null>(null);
let html = $state('');
let theme;


onMount(() => {
	const observer = new MutationObserver(convert);
	observer.observe(hiddenBox, { childList: true, characterData: true, subtree: true });
	themeObserver.addEventListener('change', onThemeChange);
	onThemeChange();
});


function onThemeChange () {
	theme = getEffectiveTheme() === 'light' ? THEMES.light : THEMES.dark;
	convert();
}


function convert () {
	if (!hiddenBox) return;
	const h = ('' + hiddenBox?.innerText).replace(/&gt;/g, '>').trim();
	getHighlighter().then(hl => html = hl.codeToHtml(h, { lang, theme }));
}


</script>
