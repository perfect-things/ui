import { render } from '@testing-library/svelte';
import Tooltip from './helpers/Tooltip.svelte';
import { default as userEvent } from '@testing-library/user-event';
import { waitForTimeout } from './helpers/utils';


test('Tooltip', async () => {
	const { container, component } = render(Tooltip);

	const btn = container.querySelector('#box1');
	await userEvent.hover(btn);

	let tooltip = container.querySelector('.tooltip-content');
	expect(tooltip).toBeInTheDocument();
	expect(tooltip.parentNode).toHaveClass('test-class');
	expect(tooltip).toHaveTextContent('Some tooltip text');

	await userEvent.unhover(btn);
	await waitForTimeout();
	expect(tooltip).not.toBeInTheDocument();

	await userEvent.hover(btn);
	await waitForTimeout();
	tooltip = container.querySelector('.tooltip-content');
	expect(tooltip).toBeInTheDocument();

	// test color variations
	const plate = container.querySelector('.tooltip-plate');
	await component.$set({ success: true });
	expect(plate).toHaveClass('success');
	await component.$set({ success: false });

	await component.$set({ danger: true });
	expect(plate).toHaveClass('danger');
	await component.$set({ danger: false });

	await component.$set({ warning: true });
	expect(plate).toHaveClass('warning');
	await component.$set({ warning: false });

	// test closing with Escape
	await userEvent.keyboard('[Escape]');
	expect(tooltip).not.toBeInTheDocument();
});
