import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';

import { Drawer } from '../src/drawer';


test('Drawer', async () => {
	const openMock = vi.fn();
	const closeMock = vi.fn();
	const props = $state({
		title: 'drawer1',
		class: 'test-class',
		onopen: openMock,
		onclose: closeMock,
		children: undefined
	});

	const component = mount(Drawer, { target: document.body, props });

	let cmp = document.body.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();

	component.open();
	flushSync();

	cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(openMock).toHaveBeenCalled();

	const drawerTitle = document.body.querySelector('.test-class .drawer-header');
	expect(drawerTitle).toHaveTextContent(props.title);

	// test focus traps
	await userEvent.keyboard('[Tab]');
	await userEvent.keyboard('[Tab]');
	expect(cmp.contains(document.activeElement)).toBeTruthy();

	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	expect(cmp.contains(document.activeElement)).toBeTruthy();

	await userEvent.click(document.body);
	flushSync();
	expect(closeMock).toHaveBeenCalled();
	// cmp = document.body.querySelector('.test-class');
	// expect(cmp).not.toBeInTheDocument();

	component.open();
	flushSync();
	cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	const closer = document.body.querySelector('.test-class .drawer-header .btn-close');
	await userEvent.click(closer);
	// flushSync();
	// cmp = document.body.querySelector('.test-class');
	// expect(cmp).not.toBeInTheDocument();

	unmount(component);
});
