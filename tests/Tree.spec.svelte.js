import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import { Tree } from '../src/tree';


const items = [
	{ id: 1, name: 'One' },
	{ id: 2, name: 'Two' },
	{ id: 3, name: 'Three', items: [
		{ id: 31, name: 'One' },
		{ id: 32, name: 'Two' },
		{ id: 33, name: 'Three' }
	] },
	{ id: 4, name: 'Ten' }
];


test('Tree', async () => {
	const mock = vi.fn();
	const props = $state({
		items,
		class: 'test-class',
		select: mock
	});

	const component = mount(Tree, {
		target: document.body,
		props
	});

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('tree');

	const nodes = document.body.querySelectorAll('.tree-node');
	expect(nodes.length).toBe(4);

	await userEvent.click(nodes[0]);
	expect(mock).toHaveBeenCalled();

	await userEvent.click(nodes[1]);
	await userEvent.click(nodes[2]);
	expect(mock).toHaveBeenCalledTimes(3);

	unmount(component);
});
