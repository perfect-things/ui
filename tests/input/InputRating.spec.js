import { render, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
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

	const secondStar = cmp.querySelector('.button:nth-child(2)');
	await fireEvent.click(secondStar);
	await waitForTimeout();

	expect(secondStar).toBeInTheDocument();
	expect(secondStar).toHaveClass('active');
	expect(mock).toHaveBeenCalled();

	const thirdStar = cmp.querySelector('.button:nth-child(2)');
	expect(thirdStar).toBeInTheDocument();

	await userEvent.hover(thirdStar);
	await waitForTimeout();
	expect(secondStar).toHaveClass('active');

});
