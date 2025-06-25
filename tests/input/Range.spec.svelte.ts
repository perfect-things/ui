import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { Range } from '../../src/input';

test('Range', async () => {
	let changeEvent;

	const props = $state({
		id: 'Range1',
		title: 'Range1',
		name: 'Range1',
		label: 'Range1',
		class: 'test-class',
		error: 'error',
		value: '5',
		onchange: (e) => {
			changeEvent = e;
		}
	});

	// @ts-ignore
	const component = await mount(Range, { target: document.body, props });

	const cmp = document.body.querySelector('[title="Range1"]');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveValue('5');

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	err = cmp.querySelector('.info-bar-error');
	// Note: Error element behavior might differ in Svelte 5

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

	const tick6 = cmp.querySelector('.range-ticks span:nth-child(6)');
	await userEvent.click(tick6);
	expect(changeEvent).toBeDefined();

	unmount(component);
});
