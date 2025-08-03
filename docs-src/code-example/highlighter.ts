import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

let highlighter;

export const THEMES = {
	light: 'catppuccin-latte',
	dark: 'one-dark-pro',
};


export function getHighlighter () {
	if (!highlighter) initHighlighter();
	return highlighter;
}

function initHighlighter () {
	highlighter = createHighlighterCore({
		themes: [
			import('@shikijs/themes/catppuccin-latte'),
			import('@shikijs/themes/one-dark-pro'),
		],
		langs: [
			import('@shikijs/langs/svelte'),
			import('@shikijs/langs/javascript'),
			import('@shikijs/langs/json'),
			import('@shikijs/langs/bash'),
		],
		engine: createJavaScriptRegexEngine()
	});
}
