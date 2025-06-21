import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import Menu from './helpers/Menu.svelte';


test('Menu', async () => {
	// @ts-ignore
	vi.spyOn(window, 'setTimeout').mockImplementation(cb => cb());

	const props = {};
	const user = userEvent.setup();
	const component = mount(Menu, { target: document.body, props });

	let cmp = document.body.querySelector('.test-menu');
	expect(cmp).not.toBeInTheDocument();

	const btn = document.body.querySelector('.open-menu-button');
	await userEvent.click(btn);
	cmp = document.body.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();

	const menuItem = document.body.querySelector('.test-menu .menu-item');

	expect(menuItem).toBeInTheDocument();
	expect(menuItem).toHaveTextContent('Add');


	await user.click(menuItem);
	expect(menuItem).not.toBeInTheDocument();
	expect(cmp).not.toBeInTheDocument();


	await userEvent.click(document.body);
	expect(cmp).not.toBeInTheDocument();


	await userEvent.click(btn);
	cmp = document.body.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();

	unmount(component);
});
