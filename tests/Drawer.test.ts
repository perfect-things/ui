import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';

import { Drawer } from '../src';


test('Drawer', async () => {
	const openMock = vi.fn();
	const closeMock = vi.fn();
	const props = {
		title: 'drawer1',
		class: 'test-class',
		onopen: openMock,
		onclose: closeMock,
		children: undefined
	};

	const component = mount(Drawer, { target: document.body, props });

	let cmp = document.body.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();

	(component as any).open();
	flushSync();

	cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(openMock).toHaveBeenCalled();

	const drawerTitle = document.body.querySelector('.test-class .drawer-header');
	expect(drawerTitle).toHaveTextContent(props.title);

	// test focus traps
	await userEvent.keyboard('[Tab]');
	await userEvent.keyboard('[Tab]');
	expect(cmp?.contains(document.activeElement)).toBeTruthy();

	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	expect(cmp?.contains(document.activeElement)).toBeTruthy();

	await userEvent.click(document.body);
	expect(closeMock).toHaveBeenCalled();
	cmp = document.body.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();

	(component as any).open();
	flushSync();

	cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	const closer = document.body.querySelector('.test-class .drawer-header .btn-close');
	await userEvent.click(closer);
	cmp = document.body.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();

	await unmount(component);
});
