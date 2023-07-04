import { vi } from 'vitest';
import { Toggle } from '../src/toggle';
import { render, fireEvent } from '@testing-library/svelte';

test('Toggle', async () => {
	const props = {
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		class: 'test-class',
		required: true,
	};
	const { container, getByTitle, component } = render(Toggle, props);

	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('toggle');

	// verify props
	const label = getByTitle('Component1');
	expect(label).toBeInTheDocument();

	const input = label.querySelector('input');
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('required');
	expect(input).not.toBeChecked();

	await fireEvent.mouseDown(label);
	await fireEvent.mouseUp(label);
	expect(mock).toHaveBeenCalled();
	expect(input).toBeChecked();

});
