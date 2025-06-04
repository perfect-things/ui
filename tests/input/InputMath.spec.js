import { render } from '@testing-library/svelte';
import { default as userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { InputMath } from '../../src/input';
import { waitForTimeout } from '../helpers/utils';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	error: 'error',
	label: 'Component1',
};


test('InputMath', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });

	const { container, component, getByTitle } = render(InputMath, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	// verify props
	const input = getByTitle(props.title);
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	await component.$set({ error: '' });
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	// expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);




	// test just digits
	await userEvent.clear(input);
	await userEvent.type(input, '123456');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('123456.00');

	// test fractions
	await userEvent.clear(input);
	await userEvent.type(input, '12.3456');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('12.35');
	expect(mock).toHaveBeenCalled();


	// test addition
	await userEvent.clear(input);
	await userEvent.type(input, '12+13');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('25.00');

	// test fractions addition (inc. js bug when adding 0.1 and 0.2)
	await userEvent.clear(input);
	await userEvent.type(input, '0.01+0.02');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('0.03');

	// test longer expression
	await userEvent.clear(input);
	await userEvent.type(input, '10 * 2 - 10 / 2 + 1');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('16.00');


	// test incorrect input
	await userEvent.clear(input);
	await userEvent.type(input, '.0.0');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('0.00');

	await userEvent.clear(input);
	await userEvent.type(input, 'abc');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('');

	await userEvent.clear(input);
	await userEvent.type(input, '1.0000a');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('1.00');

	await userEvent.clear(input);
	await userEvent.type(input, '1e');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('1.00');
});
