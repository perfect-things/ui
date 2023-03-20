import Tooltip from './helpers/Tooltip.svelte';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { waitForTimeout } from './helpers/utils';


test('Tooltip', async () => {
	const { container } = render(Tooltip);

	const cmp = container.querySelector('.tooltip-container');
	expect(cmp).toBeInTheDocument();

	const btn = container.querySelector('#box1');
	await userEvent.hover(btn);

	let tooltip = container.querySelector('.tooltip-content');
	expect(tooltip).toBeInTheDocument();
	expect(tooltip).toHaveClass('test-class');
	expect(tooltip).toHaveTextContent('Some tooltip text');

	await userEvent.unhover(btn);
	await waitForTimeout();
	expect(tooltip).not.toBeInTheDocument();

	await userEvent.hover(btn);
	await waitForTimeout();
	tooltip = container.querySelector('.tooltip-content');
	expect(tooltip).toBeInTheDocument();

	await userEvent.keyboard('[Escape]');
	expect(tooltip).not.toBeInTheDocument();
});
