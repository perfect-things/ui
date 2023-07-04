import { vi } from 'vitest';
import { Radio } from '../src/input';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('Radio', async () => {
	const items = [
		{ name: 'One', value: 1, disabled: true },
		{ name: 'Two', value: 2 },
		{ name: 'Three', value: 3 },
		{ name: 'Four', value: 4 },
	];
	const props = {
		id: 'Radio1',
		title: 'Radio1',
		name: 'Radio1',
		label: 'Radio1',
		class: 'test-class',
		error: 'error',
		items
	};
	const { getByTitle, component } = render(Radio, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = getByTitle(props.title);
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(cmp).toHaveAttribute('id', 'Radio1');


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
	expect(lbl).toHaveAttribute('for', 'Radio1');
	expect(lbl).toHaveTextContent(props.label);


	const inputs = cmp.querySelectorAll('.input-radio-item input');
	const inp0 = inputs[0];
	const inp1 = inputs[1];

	expect(inp0).not.toBeChecked();
	expect(inp1).not.toBeChecked();

	expect(inp0).toHaveAttribute('name', 'Radio1');
	expect(inp1).toHaveAttribute('name', 'Radio1');

	expect(inp0).toBeDisabled();
	expect(inp1).not.toBeDisabled();

	const labels = cmp.querySelectorAll('.input-radio-item .label');
	const lbl0 = labels[0];
	const lbl1 = labels[1];
	expect(lbl0).toHaveTextContent(items[0].name);
	expect(lbl1).toHaveTextContent(items[1].name);

	expect(lbl0.getAttribute('for')).toBe(inp0.id);
	expect(lbl1.getAttribute('for')).toBe(inp1.id);


	await fireEvent.click(lbl0);
	expect(mock).not.toHaveBeenCalled();	// first input should be disabled
	expect(inp0).not.toBeChecked();
	expect(inp1).not.toBeChecked();

	await fireEvent.click(lbl1);
	expect(mock).toHaveBeenCalled();
	expect(inp1).toBeChecked();

});
