import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import ContextMenu from './helpers/MenuContext.svelte';


test('Context Menu', async () => {
	const props = $state({});

	const component = mount(ContextMenu, { target: document.body, props });

	let cmp = document.body.querySelector('.test-menu');
	expect(cmp).not.toBeInTheDocument();

	const target = document.body.querySelector('.target1');
	await userEvent.pointer({ keys: '[MouseRight]', target });
	flushSync();
	cmp = document.body.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();

	await userEvent.click(document.body);
	flushSync();
	expect(cmp).not.toBeInTheDocument();

	await userEvent.pointer({ keys: '[MouseRight]', target });
	flushSync();
	cmp = document.body.querySelector('.test-menu');
	// expect(cmp).toBeInTheDocument();

	const menuItem = document.body.querySelector('.test-menu .menu-item');

	// expect(menuItem).toBeInTheDocument();
	// expect(menuItem).toHaveTextContent('New Tab');

	await userEvent.click(menuItem);
	// flushSync();
	// expect(cmp).not.toBeInTheDocument();

	unmount(component);
});
