import Menu from './helpers/Menu.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('Menu', async () => {
	const props = {};
	const { container } = render(Menu, props);

	const cmp = container.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('hidden');

	const btn = container.querySelector('.open-menu-button');
	await fireEvent.click(btn);
	await waitForTimeout();
	expect(cmp).not.toHaveClass('hidden');

	fireEvent.click(document.body);
	await waitForTimeout();
	expect(cmp).toHaveClass('hidden');


	fireEvent.click(btn);
	await waitForTimeout();
	expect(cmp).not.toHaveClass('hidden');

	const menuItem = container.querySelector('.test-menu .menu-button');

	expect(menuItem).toBeInTheDocument();
	expect(menuItem).toHaveTextContent('Add');

	fireEvent.click(menuItem);
	await waitForTimeout();
	expect(cmp).toHaveClass('hidden');
});
