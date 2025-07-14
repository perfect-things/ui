import { expect, test, vi } from 'vitest';
import { mount, unmount } from 'svelte';
import { Panel } from '../src/panel';
import userEvent from '@testing-library/user-event';


test('Panel', async () => {
	const onopen = vi.fn();
	const onclose = vi.fn();

	const props = {
		title: 'Panel1',
		class: 'test-class',
		collapsible: true,
		onopen,
		onclose,
		children: undefined
	};
	const component = mount(Panel, { target: document.body, props });
	const user = userEvent.setup();

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).not.toHaveClass('expanded');

	const header = cmp.querySelector('.panel-header');

	await user.click(header);
	expect(cmp).toHaveClass('expanded');

	header.dispatchEvent(new Event('transitionend'));
	expect(onopen).toHaveBeenCalled();

	const PanelTitle = document.body.querySelector('.test-class .panel-header');
	expect(PanelTitle).toHaveTextContent(props.title);

	const panel = document.body.querySelector('.test-class details');
	await user.click(panel);

	expect(cmp).not.toHaveClass('expanded');
	header.dispatchEvent(new Event('transitionend'));
	expect(onclose).toHaveBeenCalled();

	await unmount(component);
});
