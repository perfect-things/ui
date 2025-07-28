import { expect, test } from 'vitest';
import { parseAmount, roundAmount } from '../../src/input/input-math/utils';


test('InputMath-utils', () => {
	expect(parseAmount).toBeDefined();
	expect(roundAmount).toBeDefined();
});


test('InputMath - utils - parseAmount', () => {
	const validExpression = '2 + 2 * 2';
	const resultValid = parseAmount(validExpression);
	expect(resultValid).toBe(6);

	const invalidExpression = '2 + 2 *';
	const resultInvalid = parseAmount(invalidExpression);
	expect(resultInvalid).toBe(0);

	const invalid2 = 'abc + 2 * 2';
	const res2 = parseAmount(invalid2);
	expect(res2).toBe(0);

	const invalid3 = '0 / 0';
	const res3 = parseAmount(invalid3);
	expect(res3).toBe(0);
});



test('InputMath - utils - roundAmount', () => {
	const amount = 123.456;
	const rounded = roundAmount(amount);
	expect(rounded).toBe('123.46');
});
