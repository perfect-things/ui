import { vi } from 'vitest';
import { Toaster, showToast, hideToast } from '../src/toaster';
import { fireEvent, render } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';

test('Toaster', async () => {
	const props = {
		class: 'test-class',
		position: 'bottom'
	};
	const { container } = render(Toaster, props);
	const mock = vi.fn();

	const cmp = container.querySelector('.toaster');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('toaster-bottom');

	showToast('Info', 'info', 500);
	await waitForTimeout();
	let toast = container.querySelector('.toaster .toast');
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('toast-info');
	expect(toast).toHaveTextContent('Info');

	await waitForTimeout(1000);
	toast = container.querySelector('.toaster .toast');
	expect(toast).not.toBeInTheDocument();

	let tstId = showToast('Warning', 'warning', 5000);
	await waitForTimeout();
	toast = container.querySelector('.toaster .toast');
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('toast-warning');
	expect(toast).toHaveTextContent('Warning');

	hideToast(tstId);
	await waitForTimeout(600);
	expect(toast).not.toBeInTheDocument();


	tstId = showToast('Error', 'error', 10000, 'Undo', mock);
	await waitForTimeout();
	toast = container.querySelector('.toaster .toast');
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('toast-error');
	expect(toast).toHaveTextContent('Error');

	const btn = container.querySelector('.toaster .toast button');
	fireEvent.click(btn);
	expect(mock).toHaveBeenCalledWith(tstId);

	hideToast(tstId);
	await waitForTimeout(600);
	expect(toast).not.toBeInTheDocument();
}, 5000);
