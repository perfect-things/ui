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
	expect(chbox).toBeChecked();
	expect(chbox).toHaveAttribute('id', 'Checkbox1');
	expect(chbox).toHaveAttribute('name', 'Checkbox1');
	expect(chbox).toHaveAttribute('required');
	expect(chbox).toHaveClass('test-class');

	await fireEvent.click(chbox);
	expect(chbox).not.toBeChecked();

	expect(mock).toHaveBeenCalled();
});
