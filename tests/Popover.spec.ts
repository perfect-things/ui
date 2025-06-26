import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import Popover from './helpers/Popover.svelte';


test('Popover', async () => {
	// @ts-ignore
	window.requestAnimationFrame = (cb) => cb();
	// @ts-ignore
	vi.spyOn(window, 'setTimeout').mockImplementation(cb => cb());

	const props = {};
	const component = mount(Popover, { target: document.body, props });

	let cmp = document.body.querySelector('.test-popover');
	expect(cmp).not.toBeInTheDocument();

	let btn = document.body.querySelector('.open-popover-button');
	await userEvent.click(btn);

	cmp = document.body.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	const popoverItem = document.body.querySelector('.test-popover>*');
	expect(popoverItem).toBeInTheDocument();

	await userEvent.click(document.body);
	expect(cmp).not.toBeInTheDocument();

	btn = document.body.querySelector('.open-popover-button');
	await userEvent.click(btn);

	cmp = document.body.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	await unmount(component);
});
