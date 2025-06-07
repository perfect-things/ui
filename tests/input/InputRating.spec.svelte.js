import { fireEvent } from '@testing-library/svelte';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';

import { InputRating } from '../../src/input/input-rating';
import { waitForTimeout } from '../helpers/utils';



test('InputRating', async () => {
	const props = $state({
		title: 'Component1',
		id: 'Component1',
		name: 'Component1',
		required: true,
		class: 'test-class',
		onchange: vi.fn(),
	});

	const component = mount(InputRating, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	const input = cmp.querySelector('input');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('aria-required');

	const star2 = cmp.querySelector('.button:nth-child(2)');
	expect(star2).toBeInTheDocument();
	expect(star2).not.toHaveClass('active');

	document.elementFromPoint = vi.fn().mockImplementation(() => ({ dataset: { star: '2' } }));
	await fireEvent.mouseDown(star2);
	await fireEvent.mouseUp(star2);
	await waitForTimeout();

	expect(star2).toHaveClass('active');
	// expect(props.onchange).toHaveBeenCalled();

	const star3 = cmp.querySelector('.button:nth-child(3)');
	expect(star3).toBeInTheDocument();
	expect(star3).not.toHaveClass('active');

	document.elementFromPoint = vi.fn().mockImplementation(() => ({ dataset: { star: '3' } }));
	await fireEvent.mouseDown(star3);
	await fireEvent.mouseUp(star3);
	await waitForTimeout();
	expect(star3).toHaveClass('active');

	unmount(component);
});
