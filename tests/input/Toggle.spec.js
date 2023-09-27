import { render, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';
import { Toggle } from '../../src/input/toggle';
import { waitForTimeout } from '../helpers/utils';


test('Toggle', async () => {
	const props = {
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		class: 'test-class',
		required: true,
		error: 'error',
		label: 'Component1',
	};
	const { container, getByTitle, component } = render(Toggle, props);

	const mock = jest.fn();
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
	expect(input).toHaveAttribute('aria-required');
	expect(input).not.toBeChecked();

	await fireEvent.mouseDown(label);
	await fireEvent.mouseUp(label);
	expect(mock).toHaveBeenCalled();
	expect(input).toBeChecked();


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
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

});
