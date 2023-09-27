import { render, fireEvent } from '@testing-library/svelte';
import { Select } from '../../src/input/select';
import { waitForTimeout } from '../helpers/utils';


const data = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
];
const value = data[1];
const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	label: 'Component1',
	error: 'error',
	items: data,
	value
};



test('Select', async () => {
	const { container, component, getByTitle } = render(Select, props);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	const select = getByTitle('Component1');
	expect(select).toBeInTheDocument();

	// verify props
	expect(select).toHaveAttribute('id', 'Component1');
	expect(select).toHaveAttribute('title', 'Component1');
	expect(select).toHaveAttribute('name', 'Component1');
	expect(select).toHaveAttribute('aria-required');

	await fireEvent.click(select);
	await fireEvent.focus(select);
	await waitForTimeout();


	const opts = select.querySelectorAll('option');
	expect(opts.length).toBe(data.length + 1);
	expect(opts[1]).toBeInTheDocument();
	expect(opts[1]).toHaveAttribute('value', '1');


	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

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

});
