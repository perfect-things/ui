import { expect, test, vi } from 'vitest';
import { mount, unmount } from 'svelte';
import { Panel } from '../src/panel';
import userEvent from '@testing-library/user-event';


test('Panel', async () => {
	const onopen = vi.fn();
	const onclose = vi.fn().mockImplementation(() => resolve());
	let resolve = _ => _;
	const resolvedByOnClose = new Promise(_res => { resolve = _res; });

	const props = $state({
		title: 'Panel1',
		class: 'test-class',
		collapsible: true,
		onopen,
		onclose,
		children: undefined
	});
	const component = await mount(Panel, { target: document.body, props });
	const user = userEvent.setup();

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).not.toHaveClass('expanded');

	await component.toggle();

	expect(cmp).toHaveClass('expanded');
	expect(onopen).toHaveBeenCalled();

	const PanelTitle = document.body.querySelector('.test-class .panel-header');
	expect(PanelTitle).toHaveTextContent(props.title);

	const panel = document.body.querySelector('.test-class details');
	await user.click(panel);
	await resolvedByOnClose;

	expect(cmp).not.toHaveClass('expanded');
	expect(onclose).toHaveBeenCalled();

	unmount(component);
});
