import { Autocomplete } from '../src/autocomplete';
import { render, fireEvent } from '@testing-library/svelte';


test('Autocomplete', async () => {
	window.structuredClone = (val) => JSON.parse(JSON.stringify(val));

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

	const { getByTitle, component } = render(Autocomplete, props);
	const mock = jest.fn();
	component.$on('click', mock);

	const btn = getByTitle('Component1');
	expect(btn).toBeInTheDocument();
	expect(btn).toHaveAttribute('id', 'Component1');
	expect(btn).toHaveAttribute('title', 'Component1');
	expect(btn).toHaveAttribute('name', 'Component1');
	expect(btn).toHaveAttribute('placeholder', 'Component1');
	expect(btn).toHaveAttribute('required');
	expect(btn).toHaveAttribute('value', value);
	expect(btn).toHaveClass('test-class');

	// await fireEvent.click(btn);
	// expect(mock).toHaveBeenCalled();


	// await component.$set({ success: true });
	// expect(btn).toHaveClass('success');
	// await component.$set({ success: false });

	// await component.$set({ danger: true });
	// expect(btn).toHaveClass('danger');
	// await component.$set({ danger: false });

	// await component.$set({ warning: true });
	// expect(btn).toHaveClass('warning');
	// await component.$set({ warning: false });

	// await component.$set({ round: true });
	// expect(btn).toHaveClass('round');
	// await component.$set({ round: false });

	// await component.$set({ outline: true });
	// expect(btn).toHaveClass('button-outline');
	// await component.$set({ outline: false });

	// await component.$set({ text: true });
	// expect(btn).toHaveClass('button-text');
	// await component.$set({ text: false });

	// await component.$set({ link: true });
	// expect(btn).toHaveClass('button-link');
	// await component.$set({ link: false });

	// expect(btn).not.toHaveAttribute('type', 'submit');
	// await component.$set({ submit: true });
	// expect(btn).toHaveAttribute('type', 'submit');
	// await component.$set({ submit: false });
	// expect(btn).toHaveAttribute('type', 'button');

	// await component.$set({ icon: 'alert' });
	// expect(btn.querySelector('svg')).toBeInTheDocument();
	// await component.$set({ link: false });
});
