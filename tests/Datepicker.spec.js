import { Datepicker } from '../src/datepicker';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


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
	const { container } = render(Datepicker, props);

	const cmp = container.querySelector('.test-class');
	const input = cmp.querySelector('input');
	const dropdown = cmp.querySelector('.datepicker-dropdown');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('required');

	expect(dropdown).toBeInTheDocument();
	expect(dropdown).not.toHaveClass('active');

	await fireEvent.focus(input);
	await waitForTimeout();

	expect(dropdown).toHaveClass('active');

});
