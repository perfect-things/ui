import { vi } from 'vitest';
import { Tree } from '../src/tree';
import { render, fireEvent } from '@testing-library/svelte';

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
	const props = { items, class: 'test-class' };
	const { container, component } = render(Tree, props);

	const mock = vi.fn();
	component.$on('select', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('tree');

	const nodes = container.querySelectorAll('.tree-node');
	expect(nodes.length).toBe(4);

	await fireEvent.click(nodes[0]);
	expect(mock).toHaveBeenCalled();

	fireEvent.click(nodes[1]);
	fireEvent.click(nodes[2]);
	expect(mock).toHaveBeenCalledTimes(3);
});
