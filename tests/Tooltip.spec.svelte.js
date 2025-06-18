import { expect, test } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import Tooltip from './helpers/Tooltip.svelte';
import userEvent from '@testing-library/user-event';


test('Tooltip', async () => {
	const user = userEvent.setup();
	// @ts-ignore
	vi.spyOn(window, 'setTimeout').mockImplementation(cb => cb());

	const props = $state({});

	const component = mount(Tooltip, { target: document.body, props });

	const btn = document.body.querySelector('#box1');
	await user.hover(btn);

	let tooltip = document.body.querySelector('.tooltip-content');
	expect(tooltip).toBeInTheDocument();
	expect(tooltip.parentNode).toHaveClass('test-class');
	expect(tooltip).toHaveTextContent('Some tooltip text');

	await user.unhover(btn);
	expect(tooltip).not.toBeInTheDocument();

	await user.hover(btn);
	tooltip = document.body.querySelector('.tooltip-content');
	expect(tooltip).toBeInTheDocument();

	// test color variations
	const plate = document.body.querySelector('.tooltip-plate');
	expect(plate).toBeInTheDocument();

	const types = ['success', 'danger', 'warning', 'info'];
	for (const type of types) {
		props[type] = true;
		flushSync();
		expect(plate).toHaveClass(type);
		props[type] = false;
	}


	// test closing with Escape
	await user.click(document.body);
	await user.keyboard('[Escape]');
	expect(tooltip).not.toBeInTheDocument();

	unmount(component);
});
