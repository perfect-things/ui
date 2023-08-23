import { render, fireEvent } from '@testing-library/svelte';
import Popover from './helpers/Popover.svelte';
import { waitForTimeout } from './helpers/utils';


test('Popover', async () => {
	const props = {};
	const { container } = render(Popover, props);

	let cmp = container.querySelector('.test-popover');
	expect(cmp).not.toBeInTheDocument();

	const btn = container.querySelector('.open-popover-button');
	await fireEvent.click(btn);
	await waitForTimeout();
	cmp = container.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	fireEvent.click(document.body);
	await waitForTimeout();
	expect(cmp).not.toBeInTheDocument();


	fireEvent.click(btn);
	await waitForTimeout();
	cmp = container.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	const popoverItem = container.querySelector('.test-popover>*');
	expect(popoverItem).toBeInTheDocument();
});
