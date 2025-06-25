import { fireEvent } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { Radio } from '../../src/input';


test('Radio', async () => {
	const items = [
		{ name: 'One', value: 1, disabled: true },
		{ name: 'Two', value: 2 },
		{ name: 'Three', value: 3 },
		{ name: 'Four', value: 4 },
	];
	const props = $state({
		id: 'Radio1',
		title: 'Radio1',
		name: 'Radio1',
		label: 'Radio1',
		class: 'test-class',
		error: 'error',
		info: '',
		items,
		onchange: vi.fn()
	});
	const component = mount(Radio, { target: document.body, props });

	const cmp = document.body.querySelector(`[title="${props.title}"]`);
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(cmp).toHaveAttribute('id', props.id);


	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	err = cmp.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

	props.info = 'info';
	flushSync();
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	props.info = '';
	flushSync();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveTextContent(props.label);


	const inputs = cmp.querySelectorAll('.radio-item input');
	const inp0 = inputs[0];
	const inp1 = inputs[1];

	expect(inp0).not.toBeChecked();
	expect(inp1).not.toBeChecked();

	expect(inp0).toHaveAttribute('name', props.name);
	expect(inp1).toHaveAttribute('name', props.name);

	expect(inp0).toBeDisabled();
	expect(inp1).not.toBeDisabled();

	const labels = cmp.querySelectorAll('.radio-item .label');
	const lbl0 = labels[0];
	const lbl1 = labels[1];
	expect(lbl0).toHaveTextContent(items[0].name);
	expect(lbl1).toHaveTextContent(items[1].name);

	expect(lbl0.getAttribute('for')).toBe(inp0.id);
	expect(lbl1.getAttribute('for')).toBe(inp1.id);


	await fireEvent.click(lbl0);
	expect(props.onchange).not.toHaveBeenCalled();	// first input should be disabled
	expect(inp0).not.toBeChecked();
	expect(inp1).not.toBeChecked();

	await fireEvent.click(lbl1);
	expect(props.onchange).toHaveBeenCalled();
	expect(inp1).toBeChecked();

	unmount(component);
});
