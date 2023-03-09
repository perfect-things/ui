import { ButtonToggle } from '../src/button-toggle';
import { render, fireEvent } from '@testing-library/svelte';


test('Button', async () => {
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
		value
	};

	const { container, component } = render(ButtonToggle, props);
	const btnGroup = container.querySelector('.test-class');

	await component.$set({ round: true });
	expect(btnGroup).toHaveClass('round');

	expect(btnGroup).toBeInTheDocument();
	expect(btnGroup).toHaveClass('test-class');


	const labelButtons = btnGroup.querySelectorAll('label');
	const inputs = btnGroup.querySelectorAll('label input');
	expect(inputs.length).toBe(items.length);

	const firstInput = inputs[0];
	expect(firstInput).toHaveAttribute('id', props.id);
	expect(firstInput).toHaveAttribute('name', props.name);
	expect(firstInput).toHaveAttribute('value', items[0].value);
	expect(firstInput).not.toBeChecked();



	await fireEvent.click(labelButtons[0]);
	expect(inputs[0]).toBeChecked();

	await fireEvent.click(labelButtons[1]);
	expect(inputs[1]).toBeChecked();
});
