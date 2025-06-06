import { render, fireEvent } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
import { Range } from '../../src/input';
import { waitForTimeout } from '../helpers/utils';


test('Range', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });

	const props = {
		id: 'Range1',
		title: 'Range1',
		name: 'Range1',
		label: 'Range1',
		class: 'test-class',
		error: 'error',
		value: '5'
	};

	const { getByTitle, component } = render(Range, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = getByTitle(props.title);
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('id', props.id);


	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	await component.$set({ error: '' });
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	// expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	await fireEvent.change(input, { target: { value: 6 } });
	await waitForTimeout();
	expect(mock).toHaveBeenCalledTimes(1);
});
