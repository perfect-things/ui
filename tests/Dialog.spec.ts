import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import { Dialog } from '../src/dialog';


test('Dialog', async () => {
	const openMock = vi.fn();
	const closeMock = vi.fn();
	const props = {
		title: 'Dialog1',
		class: 'test-class',
		onopen: openMock,
		onclose: closeMock,
		children: undefined,
		footer: undefined
	};
	// @ts-ignore
	window.setTimeout = (cb) => { cb(); };
	const user = userEvent.setup();
	const component = mount(Dialog, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	const dialogTitle = cmp.querySelector('.dialog-header');
	expect(cmp).toBeInTheDocument();

	expect(dialogTitle).toHaveTextContent(props.title);
	expect(cmp).not.toHaveClass('opened');

	await component.open();

	expect(cmp).toHaveClass('opened');
	expect(openMock).toHaveBeenCalled();

	// test focus traps
	await user.keyboard('[Tab]');
	await user.keyboard('[Tab]');

	expect(cmp.contains(document.activeElement)).toBeTruthy();
	await user.keyboard('{Shift>}[Tab]{/Shift}');
	await user.keyboard('{Shift>}[Tab]{/Shift}');
	await user.keyboard('{Shift>}[Tab]{/Shift}');
	expect(cmp.contains(document.activeElement)).toBeTruthy();


	await user.click(cmp);
	expect(cmp).not.toHaveClass('opened');
	expect(closeMock).toHaveBeenCalled();

	await component.open();
	expect(cmp).toHaveClass('opened');
	expect(openMock).toHaveBeenCalled();

	await component.close();
	expect(cmp).not.toHaveClass('opened');
	expect(closeMock).toHaveBeenCalled();

	await unmount(component);
});
