import { render, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';

import { InputRating } from '../../src/input/input-rating';
import { waitForTimeout } from '../helpers/utils';



test('InputRating', async () => {
	const props = {
		title: 'Component1',
		id: 'Component1',
		name: 'Component1',
		required: true,
		class: 'test-class',
	};
	const { container, component } = render(InputRating, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	const input = cmp.querySelector('input');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('aria-required');

	const star2 = cmp.querySelector('.button:nth-child(2)');
	expect(star2).toBeInTheDocument();
	expect(star2).not.toHaveClass('active');

	document.elementFromPoint = jest.fn().mockImplementation(() => ({ dataset: { star: '2' } }));
	await fireEvent.mouseDown(star2);
	await waitForTimeout();

	expect(star2).toHaveClass('active');
	expect(mock).toHaveBeenCalled();

	const star3 = cmp.querySelector('.button:nth-child(3)');
	expect(star3).toBeInTheDocument();
	expect(star3).not.toHaveClass('active');

	document.elementFromPoint = jest.fn().mockImplementation(() => ({ dataset: { star: '3' } }));
	await fireEvent.mouseDown(star3);
	await waitForTimeout();
	expect(star3).toHaveClass('active');

});
