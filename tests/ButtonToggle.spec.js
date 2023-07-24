import { render, fireEvent } from '@testing-library/svelte';
import { ButtonToggle } from '../src/input/button-toggle';
import { waitForTimeout } from './helpers/utils';


test('ButtonToggle', async () => {
	const items = [
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
		{ name: 'Three', value: '3' },
	];
	const value = items[1];
	const props = {
		id: 'Component1',
		name: 'Component1',
		class: 'test-class',
		items,
		value,
		error: 'error',
		label: 'Component1',
	};

	const { container, component } = render(ButtonToggle, props);
	const cmp = container.querySelector('.test-class');

	const btnGroup = container.querySelector('.test-class');

	await component.$set({ round: true });
	expect(btnGroup).toHaveClass('round');

	expect(btnGroup).toBeInTheDocument();
	expect(btnGroup).toHaveClass('test-class');


	const labelButtons = btnGroup.querySelectorAll('.input-inner label');
	const inputs = btnGroup.querySelectorAll('label input');
	expect(inputs.length).toBe(items.length);

	const firstInput = inputs[0];
	expect(firstInput).toHaveAttribute('name', props.name);
	expect(firstInput).toHaveAttribute('value', items[0].value);
	expect(firstInput).not.toBeChecked();



	await fireEvent.click(labelButtons[0]);
	expect(inputs[0]).toBeChecked();

	await fireEvent.click(labelButtons[1]);
	expect(inputs[1]).toBeChecked();

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	await component.$set({ error: '' });
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

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

});
