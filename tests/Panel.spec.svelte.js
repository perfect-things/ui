import { expect, test, vi } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { Panel } from '../src/panel';
import { fireEvent } from '@testing-library/dom';


test('Panel', async () => {
	// window.requestAnimationFrame = (cb) => {
	// 	cb(1);
	// 	return 0;
	// };

	const openMock = vi.fn();
	const closeMock = vi.fn();
	const props = $state({
		title: 'Panel1',
		class: 'test-class',
		collapsible: true,
		onopen: openMock,
		onclose: closeMock,
		children: undefined
	});

	const component = mount(Panel, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).not.toHaveClass('expanded');

	component.toggle();
	flushSync();

	expect(cmp).toHaveClass('expanded');
	// expect(openMock).toHaveBeenCalled();

	const PanelTitle = document.body.querySelector('.test-class .panel-header');
	expect(PanelTitle).toHaveTextContent(props.title);

	const panel = document.body.querySelector('.test-class details');
	// await userEvent.click(panel);
	await fireEvent.click(panel);
	flushSync();

	expect(cmp).not.toHaveClass('expanded');
	// expect(closeMock).toHaveBeenCalled();

	unmount(component);
});
