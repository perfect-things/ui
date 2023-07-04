import { vi } from 'vitest';
import { Checkbox } from '../src/input';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('Checkbox', async () => {
	const props = {
		title: 'Checkbox1',
		id: 'Checkbox1',
		name: 'Checkbox1',
		label: 'Checkbox1',
		checked: true,
		required: true,
		class: 'test-class',
		error: 'error',
	};
	const { getByTitle, component } = render(Checkbox, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const chbox = getByTitle('Checkbox1');
	expect(chbox).toBeInTheDocument();
	expect(chbox).toHaveClass('test-class');

	let err = chbox.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);


	await component.$set({ error: '' });
	await waitForTimeout();
	err = chbox.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = chbox.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = chbox.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();


	const inp = chbox.querySelector('input');
	expect(inp).toBeChecked();
	expect(inp).toHaveAttribute('id', props.id);
	expect(inp).toHaveAttribute('name', props.name);
	expect(inp).toHaveAttribute('aria-required');

	const lbl = chbox.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	await fireEvent.click(lbl);
	expect(inp).not.toBeChecked();

	expect(mock).toHaveBeenCalled();
});
