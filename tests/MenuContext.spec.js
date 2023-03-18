import ContextMenu from './helpers/MenuContext.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('Context Menu', async () => {
	const props = {};
	const { container } = render(ContextMenu, props);

	const cmp = container.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('hidden');

	const target = container.querySelector('.target1');
	await fireEvent.contextMenu(target);
	await waitForTimeout();
	expect(cmp).not.toHaveClass('hidden');


	await fireEvent.click(document.body);
	await waitForTimeout();
	expect(cmp).toHaveClass('hidden');


	await fireEvent.contextMenu(target);
	await waitForTimeout();
	expect(cmp).not.toHaveClass('hidden');

	const menuItem = container.querySelector('.test-menu .menu-button');

	expect(menuItem).toBeInTheDocument();
	expect(menuItem).toHaveTextContent('New Tab');

	fireEvent.click(menuItem);
	await waitForTimeout();
	expect(cmp).toHaveClass('hidden');
});
