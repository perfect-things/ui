import { vi } from 'vitest';
import { Drawer } from '../src/drawer';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';
import userEvent from '@testing-library/user-event';


test('Drawer', async () => {
	const props = {
		title: 'drawer1',
		class: 'test-class',
	};
	const { container, component } = render(Drawer, props);

	const openMock = vi.fn();
	const closeMock = vi.fn();
	component.$on('open', openMock);
	component.$on('close', closeMock);

	let cmp = container.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();

	component.open();
	await waitForTimeout();

	cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(openMock).toHaveBeenCalled();

	const drawerTitle = container.querySelector('.test-class .drawer-header');
	expect(drawerTitle).toHaveTextContent(props.title);


	// test focus traps
	await userEvent.keyboard('[Tab]');
	await userEvent.keyboard('[Tab]');
	expect(cmp.contains(document.activeElement)).toBeTruthy();

	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	await userEvent.keyboard('{Shift>}[Tab]{/Shift}');
	expect(cmp.contains(document.activeElement)).toBeTruthy();

	await fireEvent.click(document.body);
	await waitForTimeout(400);
	expect(closeMock).toHaveBeenCalled();
	cmp = container.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();

	component.open();
	await waitForTimeout();
	cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	const closer = container.querySelector('.test-class .drawer-header .btn-close');
	await fireEvent.click(closer);
	await waitForTimeout(400);
	cmp = container.querySelector('.test-class');
	expect(cmp).not.toBeInTheDocument();
});
