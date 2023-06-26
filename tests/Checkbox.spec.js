import { Checkbox } from '../src/checkbox';
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
	const mock = jest.fn();
	component.$on('change', mock);

	const chbox = getByTitle('Checkbox1');
	expect(chbox).toBeInTheDocument();
	expect(chbox).toHaveClass('test-class');

	let err = chbox.querySelector('.input-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);


	await component.$set({ error: '' });
	await waitForTimeout();
	err = chbox.querySelector('.input-error');
	expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = chbox.querySelector('.input-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = chbox.querySelector('.input-info');
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
