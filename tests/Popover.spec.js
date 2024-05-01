import { render, fireEvent } from '@testing-library/svelte';
import Popover from './helpers/Popover.svelte';
import { waitForTimeout } from './helpers/utils';


test('Popover', async () => {
	const props = {};
	const { baseElement } = render(Popover, props);

	let cmp = baseElement.querySelector('.test-popover');
	expect(cmp).not.toBeInTheDocument();

	const btn = baseElement.querySelector('.open-popover-button');
	await fireEvent.click(btn);
	await waitForTimeout();


	cmp = baseElement.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	fireEvent.click(document.body);
	await waitForTimeout();
	expect(cmp).not.toBeInTheDocument();


	fireEvent.click(btn);
	await waitForTimeout();
	cmp = baseElement.querySelector('.test-popover');
	expect(cmp).toBeInTheDocument();

	const popoverItem = baseElement.querySelector('.test-popover>*');
	expect(popoverItem).toBeInTheDocument();
});
