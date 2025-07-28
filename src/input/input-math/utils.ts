/**
 * Parses a mathematical expression and returns its numeric value or an error message.
 * @param amount - The input string representing a mathematical expression.
 * @returns The numeric value of the expression or an error message.
 */
export function parseAmount (amount: string): number {
	if (!amount) return 0;
	amount = ('' + amount).replace(/[\s,]/g, '').replace(/^-?0+(?=\d)/, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		let res: number = 0;
		// eslint-disable-next-line @typescript-eslint/no-implied-eval
		try { res = new Function(`return ${amount}`)(); }
		catch { res = 0; }
		amount = String(res);
	}
	const num = parseFloat(amount);
	return (num === Infinity || isNaN(num)) ? 0 : num;
}




/**
 * Rounds a number to a specified precision and returns it as a string.
 * @param val - The number to round.
 * @param precision - The number of decimal places to round to (default is 2).
 * @returns {string} - The rounded number as a string, formatted to the specified precision.
 */
export function roundAmount (val: number, precision = 2): string {
	const multiplier = Math.pow(10, precision);
	return (Math.round(val * multiplier) / multiplier).toFixed(precision);
}
