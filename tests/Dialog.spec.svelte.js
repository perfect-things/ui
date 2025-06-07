import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';

import { Dialog } from '../src/dialog';
import { waitForTimeout } from './helpers/utils';


test('Dialog', async () => {
	const openMock = vi.fn();
	const closeMock = vi.fn();
	const props = $state({
		title: 'Dialog1',
		class: 'test-class',
		onopen: openMock,
		onclose: closeMock,
		children: undefined,
		footer: undefined
	});

	const component = mount(Dialog, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	const dialogTitle = cmp.querySelector('.dialog-header');
	expect(cmp).toBeInTheDocument();

	expect(dialogTitle).toHaveTextContent(props.title);
	expect(cmp).not.toHaveClass('opened');

	component.open();
	flushSync();
	await waitForTimeout();

	expect(cmp).toHaveClass('opened');
	expect(openMock).toHaveBeenCalled();

	// test focus traps
	await userEvent.keyboard('[Tab]');
	await userEvent.keyboard('[Tab]');

	expect(cmp.contains(document.activeElement)).toBeTruthy();
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	expect(cmp.contains(document.activeElement)).toBeTruthy();

	await userEvent.click(cmp);
	flushSync();
	await waitForTimeout();
	expect(cmp).not.toHaveClass('opened');
	expect(closeMock).toHaveBeenCalled();

	component.open();
	flushSync();
	await waitForTimeout();
	expect(cmp).toHaveClass('opened');
	expect(openMock).toHaveBeenCalled();

	component.close();
	flushSync();
	await waitForTimeout();
	expect(cmp).not.toHaveClass('opened');
	expect(closeMock).toHaveBeenCalled();

	unmount(component);
});
