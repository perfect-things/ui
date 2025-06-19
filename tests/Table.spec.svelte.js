import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import Table from './helpers/Table.svelte';


test('Table', async () => {
	const clickMock = vi.fn();
	const selectMock = vi.fn();
	const props = $state({
		onclick: clickMock,
		onselect: selectMock
	});

	const component = mount(Table, {
		target: document.body,
		// @ts-ignore
		props
	});

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const rows = document.body.querySelectorAll('.row-sel');
	expect(rows.length).toBe(14);

	const row = rows[3];
	await userEvent.click(row);
	expect(clickMock).toHaveBeenCalled();

	await userEvent.keyboard('[ArrowDown]');
	expect(selectMock).toHaveBeenCalled();

	unmount(component);
});
