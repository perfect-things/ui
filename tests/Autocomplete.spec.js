import { render, fireEvent } from '@testing-library/svelte';
import { Autocomplete } from '../src/autocomplete';
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
	data,
	value
};



test('Autocomplete', async () => {
	const { container, getByTitle, getByText } = render(Autocomplete, props);

	const autocomplete = container.querySelector('.autocomplete');
	expect(autocomplete).toBeInTheDocument();
	expect(autocomplete).toHaveClass('test-class');

	// verify props
	const input = getByTitle('Component1');
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('title', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('required');

	// open list
	await fireEvent.click(input);
	await waitForTimeout();

	// verify list
	const autocompleteList = container.querySelector('.autocomplete-list');
	expect(autocompleteList).toBeInTheDocument();
	expect(autocompleteList).not.toHaveClass('hidden');
	expect(autocomplete).toHaveClass('open');

	const item = getByText(value.name);
	expect(item).toBeInTheDocument();

	// click on list item
	await fireEvent.click(item);
	await waitForTimeout();

	// verify that the item was selected
	expect(autocompleteList).toHaveClass('hidden');
	expect(autocomplete).not.toHaveClass('open');
	expect(input.value).toBe(value.name);
});
