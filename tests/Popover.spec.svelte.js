import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import Popover from './helpers/Popover.svelte';


test('Popover', async () => {
	window.requestAnimationFrame = (cb) => {
		cb(1);
		return 0;
	};

	const props = $state({});
	const component = mount(Popover, { target: document.body, props });

	let cmp = document.body.querySelector('.test-popover');
	expect(cmp).not.toBeInTheDocument();

	let btn = document.body.querySelector('.open-popover-button');
	await userEvent.click(btn);
	flushSync();

	cmp = document.body.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	const popoverItem = document.body.querySelector('.test-popover>*');
	expect(popoverItem).toBeInTheDocument();

	await userEvent.click(document.body);
	flushSync();
	expect(cmp).not.toBeInTheDocument();

	btn = document.body.querySelector('.open-popover-button');
	await userEvent.click(btn);
	flushSync();

	// cmp = document.body.querySelector('.test-popover');
	// expect(cmp).toBeInTheDocument();

	unmount(component);
});
