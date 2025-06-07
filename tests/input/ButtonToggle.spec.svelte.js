import { fireEvent } from '@testing-library/svelte';
import { flushSync, mount, unmount } from 'svelte';
import { ButtonToggle } from '../../src/input/button-toggle';
import { expect, test } from 'vitest';


test('ButtonToggle', async () => {
	const items = [
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
		{ name: 'Three', value: '3' },
	];
	const value = items[1];
	const props = $state({
		id: 'Component1',
		name: 'Component1',
		class: 'test-class',
		items,
		value,
		error: 'error',
		label: 'Component1',
		round: undefined,
		info: undefined
	});

	// @ts-ignore
	const component = mount(ButtonToggle, { target: document.body, props });

	const btnGroup = document.body.querySelector('.test-class');

	props.round = true;
	flushSync();
	expect(btnGroup).toHaveClass('round');

	expect(btnGroup).toBeInTheDocument();
	expect(btnGroup).toHaveClass('test-class');

	const labelButtons = btnGroup.querySelectorAll('.input-inner label');
	const inputs = btnGroup.querySelectorAll('label input');
	expect(inputs.length).toBe(items.length);

	const firstInput = inputs[0];
	expect(firstInput).toHaveAttribute('name', props.name);
	expect(firstInput).toHaveAttribute('value', items[0].value);
	expect(firstInput).not.toBeChecked();

	await fireEvent.click(labelButtons[0]);
	expect(inputs[0]).toBeChecked();

	await fireEvent.click(labelButtons[1]);
	expect(inputs[1]).toBeChecked();

	let err = btnGroup.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	err = btnGroup.querySelector('.info-bar-error');
	// expect(err).not.toBeInTheDocument();

	props.info = 'info';
	flushSync();
	let info = btnGroup.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	props.info = '';
	flushSync();
	info = btnGroup.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	const lbl = btnGroup.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	unmount(component);
});
