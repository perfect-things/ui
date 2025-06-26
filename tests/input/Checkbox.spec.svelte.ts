import { fireEvent } from '@testing-library/svelte';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';

import { Checkbox } from '../../src/input';


test('Checkbox', async () => {
	const mock = vi.fn();
	const props = $state({
		title: 'Checkbox1',
		id: 'Checkbox1',
		name: 'Checkbox1',
		label: 'Checkbox1',
		checked: true,
		required: true,
		class: 'test-class',
		error: 'error',
		info: undefined,
		onchange: mock
	});

	// @ts-ignore
	const component = mount(Checkbox, { target: document.body, props });

	const chbox = document.body.querySelector('[title="Checkbox1"]');
	expect(chbox).toBeInTheDocument();
	expect(chbox).toHaveClass('test-class');

	let err = chbox.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	err = chbox.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

	props.info = 'info';
	flushSync();
	let info = chbox.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	props.info = '';
	flushSync();
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

	await fireEvent.click(inp);
	expect(inp).not.toBeChecked();

	expect(mock).toHaveBeenCalled();

	await unmount(component);
});
