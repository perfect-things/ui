import { render, fireEvent } from '@testing-library/svelte';
import ContextMenu from './helpers/MenuContext.svelte';
import { waitForTimeout } from './helpers/utils';


test('Context Menu', async () => {
	const props = {};
	const { container } = render(ContextMenu, props);

	let cmp = container.querySelector('.test-menu');
	expect(cmp).not.toBeInTheDocument();

	const target = container.querySelector('.target1');
	await fireEvent.contextMenu(target);
	await waitForTimeout();
	cmp = container.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();


	await fireEvent.click(document.body);
	await waitForTimeout();
	expect(cmp).not.toBeInTheDocument();


	await fireEvent.contextMenu(target);
	await waitForTimeout();
	cmp = container.querySelector('.test-menu');
	expect(cmp).toBeInTheDocument();


	const menuItem = container.querySelector('.test-menu .menu-item');

	expect(menuItem).toBeInTheDocument();
	expect(menuItem).toHaveTextContent('New Tab');

	fireEvent.click(menuItem);
	await waitForTimeout();
	expect(cmp).not.toBeInTheDocument();
});
