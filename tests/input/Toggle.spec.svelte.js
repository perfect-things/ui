import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import { Toggle } from '../../src/input/toggle';


test('Toggle', async () => {
	const mock = vi.fn();
	const props = $state({
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		class: 'test-class',
		required: true,
		error: 'error',
		label: 'Component1',
		info: undefined,
		onchange: mock
	});

	// @ts-ignore
	const component = mount(Toggle, { target: document.body, props });
	const user = userEvent.setup();

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('toggle');

	// verify props
	const label = document.body.querySelector('[title="Component1"]');
	expect(label).toBeInTheDocument();

	const input = label.querySelector('input');
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('aria-required');
	expect(input).not.toBeChecked();

	await user.click(label);

	expect(mock).toHaveBeenCalledWith(true);
	expect(input).toBeChecked();

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
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	unmount(component);
});
