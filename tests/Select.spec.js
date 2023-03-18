import { render, fireEvent } from '@testing-library/svelte';
import { Select } from '../src/select';
import { waitForTimeout } from './helpers/utils';


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
	items: data,
	value
};



test('Select', async () => {
	const { getByTitle } = render(Select, props);

	const select = getByTitle('Component1');
	expect(select).toBeInTheDocument();
	expect(select.parentNode).toHaveClass('test-class');

	// verify props
	expect(select).toHaveAttribute('id', 'Component1');
	expect(select).toHaveAttribute('title', 'Component1');
	expect(select).toHaveAttribute('name', 'Component1');
	expect(select).toHaveAttribute('required');

	await fireEvent.click(select);
	await fireEvent.focus(select);
	await waitForTimeout();


	const opts = select.querySelectorAll('option');
	expect(opts.length).toBe(data.length + 1);
	expect(opts[1]).toBeInTheDocument();
	expect(opts[1]).toHaveAttribute('value', '1');

});
