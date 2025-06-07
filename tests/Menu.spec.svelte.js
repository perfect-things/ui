import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import Menu from './helpers/Menu.svelte';


test('Menu', async () => {
	const props = $state({});

	const component = mount(Menu, { target: document.body, props });

	let cmp = document.body.querySelector('.test-menu');
	expect(cmp).not.toBeInTheDocument();

	const btn = document.body.querySelector('.open-menu-button');
	await userEvent.click(btn);
	flushSync();
	cmp = document.body.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();

	const menuItem = document.body.querySelector('.test-menu .menu-item');

	expect(menuItem).toBeInTheDocument();
	expect(menuItem).toHaveTextContent('Add');

	// await userEvent.click(menuItem);
	// flushSync();
	// expect(cmp).not.toBeInTheDocument();


	await userEvent.click(document.body);
	flushSync();
	expect(cmp).not.toBeInTheDocument();


	// await userEvent.click(btn);
	// flushSync();
	// cmp = document.body.querySelector('.test-menu');
	// expect(cmp).toBeInTheDocument();

	unmount(component);
});
