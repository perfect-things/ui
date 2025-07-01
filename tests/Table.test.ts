import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import Table from './helpers/Table.svelte';


test('Table', async () => {
	const onclick = vi.fn();
	const onselect = vi.fn();
	const props = { onclick, onselect };

	// @ts-ignore
	const component = mount(Table, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const rows = document.body.querySelectorAll('.row-sel');
	expect(rows.length).toBe(14);

	const row = rows[3];
	await userEvent.click(row);
	expect(onclick).toHaveBeenCalled();

	await userEvent.keyboard('[ArrowDown]');
	expect(onselect).toHaveBeenCalled();

	await unmount(component);
});
