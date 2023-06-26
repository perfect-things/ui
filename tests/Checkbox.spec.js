import { Checkbox } from '../src/checkbox';
import { render, fireEvent } from '@testing-library/svelte';


test('Checkbox', async () => {
	const props = {
		title: 'Checkbox1',
		id: 'Checkbox1',
		name: 'Checkbox1',
		checked: true,
		required: true,
		class: 'test-class',
	};
	const { getByTitle, component } = render(Checkbox, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const chbox = getByTitle('Checkbox1');
	expect(chbox).toBeInTheDocument();
	expect(chbox).toHaveClass('test-class');

	const inp = chbox.querySelector('input');
	expect(inp).toBeChecked();
	expect(inp).toHaveAttribute('id', 'Checkbox1');
	expect(inp).toHaveAttribute('name', 'Checkbox1');
	expect(inp).toHaveAttribute('aria-required');

	const lbl = chbox.querySelector('label');
	await fireEvent.click(lbl);
	expect(inp).not.toBeChecked();

	expect(mock).toHaveBeenCalled();
});
