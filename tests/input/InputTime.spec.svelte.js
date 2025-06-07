import { expect, test, vi } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import userEvent from '@testing-library/user-event';
import { InputTime } from '../../src/input';

test('InputTime', async () => {
	const props = $state({
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		placeholder: 'Component1',
		class: 'test-class',
		required: true,
		error: 'error',
		label: 'Component1',
		value: '12:00',
		onchange: vi.fn(),
	});

	const component = mount(InputTime, {
		target: document.body,
		props
	});

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const input = document.body.querySelector(`[title="${props.title}"]`);
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');
	expect(input).toHaveValue(props.value);

	await userEvent.clear(input);
	await userEvent.type(input, '14:00');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('14:00');

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	err = cmp.querySelector('.info-bar-error');

	// @ts-ignore
	props.info = 'info';
	flushSync();
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	// @ts-ignore
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
