import { render, fireEvent } from '@testing-library/svelte';
import Menu from './helpers/Menu.svelte';
import { waitForTimeout } from './helpers/utils';


test('Menu', async () => {
	const props = {};
	const { container } = render(Menu, props);

	let cmp = container.querySelector('.test-menu');
	expect(cmp).not.toBeInTheDocument();

	const btn = container.querySelector('.open-menu-button');
	await fireEvent.click(btn);
	await waitForTimeout();
	cmp = container.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();

	fireEvent.click(document.body);
	await waitForTimeout();
	expect(cmp).not.toBeInTheDocument();


	fireEvent.click(btn);
	await waitForTimeout();
	cmp = container.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();

	const menuItem = container.querySelector('.test-menu .menu-item');

	expect(menuItem).toBeInTheDocument();
	expect(menuItem).toHaveTextContent('Add');

	fireEvent.click(menuItem);
	await waitForTimeout();
	expect(cmp).not.toBeInTheDocument();
});
