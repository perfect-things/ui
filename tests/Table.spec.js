import { vi } from 'vitest';
import Table from './helpers/Table.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';


test('Table', async () => {
	const { container, component } = render(Table);

	const clickMock = vi.fn();
	const selectMock = vi.fn();
	component.$on('click', clickMock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const rows = container.querySelectorAll('.row-sel');
	expect(rows.length).toBe(14);

	const row = rows[3];
	await fireEvent.click(row);
	expect(clickMock).toHaveBeenCalled();

	component.$on('select', selectMock);
	await userEvent.keyboard('[ArrowDown]');
	expect(selectMock).toHaveBeenCalled();
});
