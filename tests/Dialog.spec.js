import { vi } from 'vitest';
import { Dialog } from '../src/dialog';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';
import userEvent from '@testing-library/user-event';


test('Dialog', async () => {
	const props = {
		title: 'Dialog1',
		class: 'test-class',
	};
	const { container, component } = render(Dialog, props);
	const openMock = vi.fn();
	const closeMock = vi.fn();
	component.$on('open', openMock);
	component.$on('close', closeMock);

	const cmp = container.querySelector('.test-class');
	const dialogTitle = cmp.querySelector('.dialog-header');
	expect(cmp).toBeInTheDocument();

	expect(dialogTitle).toHaveTextContent(props.title);
	expect(cmp).not.toHaveClass('opened');


	component.open();
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

	await fireEvent.click(cmp);
	await waitForTimeout();
	expect(cmp).not.toHaveClass('opened');
	expect(closeMock).toHaveBeenCalled();

	component.open();
	await waitForTimeout();
	expect(cmp).toHaveClass('opened');
	expect(openMock).toHaveBeenCalled();

	component.close();
	await waitForTimeout();
	expect(cmp).not.toHaveClass('opened');
	expect(closeMock).toHaveBeenCalled();

});
