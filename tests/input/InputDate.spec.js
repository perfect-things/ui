import { render, fireEvent } from '@testing-library/svelte';
import { default as userEvent } from '@testing-library/user-event';
import jest from 'jest-mock';

import { InputDate } from '../../src/input/input-date';
import { waitForTimeout } from '../helpers/utils';



test('Datepicker', async () => {
	const props = {
		title: 'Component1',
		id: 'Component1',
		name: 'Component1',
		placeholder: 'Component1',
		required: true,
		class: 'test-class',
		showOnFocus: true
	};
	const { container, component } = render(InputDate, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	const input = cmp.querySelector('input');
	const dropdown = cmp.querySelector('.datepicker-dropdown');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('aria-required');

	expect(dropdown).toBeInTheDocument();
	expect(dropdown).not.toHaveClass('active');

	await fireEvent.focus(input);
	await waitForTimeout();
	expect(dropdown).toHaveClass('active');

	await userEvent.clear(input);
	await userEvent.type(input, '2020-01-01');
	await userEvent.keyboard('[Enter]');

	expect(mock).toHaveBeenCalled();
	expect(dropdown).not.toHaveClass('active');
});
