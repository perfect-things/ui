
/**
 * Checks if a given text is a keyboard symbol (like ⌘, ⌥, ⇧, etc.).
 * @param {string} txt - The text to check
 * @returns {boolean} True if the text is a keyboard symbol, false otherwise
 * @example
 * isSymbol('⌘') // true
 * isSymbol('A') // false
 * isSymbol('⇧') // true
 */
export function isSymbol (txt: string): boolean {
	const symbols = ['⌘', '⌥', '⇧', '⌃', '⌫', '⏎', '⎋'];
	return symbols.includes(txt);
}


/**
 * Replaces keyboard key names with their corresponding symbols.
 * Converts text like "CMD+SHIFT+A" to "⌘⇧A".
 * @param {string | any} txt - The text containing key names to replace
 * @returns {string} The text with key names replaced by symbols
 * @example
 * replaceKeySymbols('CMD+A') // '⌘A'
 * replaceKeySymbols('CTRL+SHIFT+DELETE') // '⌃⇧⌫'
 * replaceKeySymbols('ALT+ENTER') // '⌥⏎'
 */
export function replaceKeySymbols (txt: string | any): string {
	return ('' + txt)
		.trim()
		.toUpperCase()
		.replace(/\+/g, '')
		.replace(/CMD|COMMAND/g, '⌘')
		.replace(/ALT|OPTION/g, '⌥')
		.replace(/SHIFT/g, '⇧')
		.replace(/CONTROL|CTRL/g, '⌃')
		.replace(/DELETE|DEL|BACKSPACE/g, '⌫')
		.replace(/ENTER|RETURN/g, '⏎')
		.replace(/ESCAPE|ESC/g, '⎋');
}
