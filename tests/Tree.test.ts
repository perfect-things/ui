import { expect, test, vi, describe, beforeEach, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import { Tree } from '../src/tree';

describe('Tree', () => {
	let container: HTMLElement;
	let component: any;

	const items = [
		{ id: 1, name: 'One' },
		{ id: 2, name: 'Two' },
		{ id: 3, name: 'Three', items: [
			{ id: 31, name: 'Thirty-One' },
			{ id: 32, name: 'Thirty-Two' },
			{ id: 33, name: 'Thirty-Three' }
		] },
		{ id: 4, name: 'Four' }
	];

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		if (component) {
			unmount(component);
			component = null;
		}
		document.body.removeChild(container);
	});

	test('basic rendering and selection', async () => {
		const onselect = vi.fn();
		component = mount(Tree, {
			target: container,
			props: { items, onselect }
		});

		expect(container.querySelector('.tree')).toBeInTheDocument();
		expect(container.querySelectorAll('.tree-node')).toHaveLength(4);

		const firstNode = container.querySelector('.tree-node');
		await userEvent.click(firstNode);

		expect(onselect).toHaveBeenCalled();
		const callArgs = onselect.mock.calls[0];
		expect(callArgs[1].item).toEqual({ id: 1, name: 'One' });
	});

	test('should render with title and aria-label', () => {
		component = mount(Tree, {
			target: container,
			props: {
				items,
				title: 'File Tree'
			}
		});

		const treeElement = container.querySelector('.tree');
		expect(treeElement).toHaveAttribute('title', 'File Tree');
	});

	test('should handle empty items array', () => {
		component = mount(Tree, {
			target: container,
			props: { items: [] }
		});

		expect(container.querySelector('.tree')).toBeInTheDocument();
		expect(container.querySelectorAll('.tree-node')).toHaveLength(0);
	});

	test('should expand and collapse folder nodes', async () => {
		component = mount(Tree, {
			target: container,
			props: { items }
		});

		const folderNode = container.querySelector('[data-id="3"]');
		expect(folderNode).toBeInTheDocument();

		// Initially collapsed - only 4 root nodes visible
		expect(container.querySelectorAll('.tree-node')).toHaveLength(4);

		// Click to expand folder
		await userEvent.click(folderNode);

		// After expanding folder should show child nodes
		expect(container.querySelectorAll('.tree-node').length).toBeGreaterThan(4);
	});

	test('should handle selection of different node types', async () => {
		const onselect = vi.fn();
		component = mount(Tree, {
			target: container,
			props: { items, onselect }
		});

		// Select regular item
		const regularNode = container.querySelector('[data-id="2"]');
		await userEvent.click(regularNode);
		expect(onselect).toHaveBeenCalled();
		let callArgs = onselect.mock.calls[onselect.mock.calls.length - 1];
		expect(callArgs[1].item).toEqual({ id: 2, name: 'Two' });

		// Select folder item
		const folderNode = container.querySelector('[data-id="3"]');
		await userEvent.click(folderNode);
		callArgs = onselect.mock.calls[onselect.mock.calls.length - 1];
		expect(callArgs[1].item).toEqual({ id: 3, name: 'Three', items: expect.any(Array) });
	});

	test('should handle basic keyboard navigation', async () => {
		component = mount(Tree, {
			target: container,
			props: { items }
		});

		const tree = container.querySelector('.tree');
		await userEvent.click(tree);

		// Test that keyboard events don't throw errors
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{ArrowUp}');
		await userEvent.keyboard('{ArrowRight}');
		await userEvent.keyboard('{ArrowLeft}');
		await userEvent.keyboard('{Enter}');

		// Should not throw errors
		expect(tree).toBeInTheDocument();
	});

	test('should render nested structure correctly', () => {
		const complexItems = [
			{ id: 1, name: 'Root 1', items: [
				{ id: 11, name: 'Child 1.1' },
				{ id: 12, name: 'Child 1.2', items: [
					{ id: 121, name: 'Grandchild 1.2.1' }
				] }
			] },
			{ id: 2, name: 'Root 2' }
		];

		component = mount(Tree, {
			target: container,
			props: { items: complexItems }
		});

		// Should render root level items
		expect(container.querySelectorAll('.tree-node')).toHaveLength(2);

		// Check specific nodes exist
		expect(container.querySelector('[data-id="1"]')).toBeInTheDocument();
		expect(container.querySelector('[data-id="2"]')).toBeInTheDocument();
	});

	test('should handle restProps', () => {
		component = mount(Tree, {
			target: container,
			props: {
				items,
				'data-testid': 'tree-component',
				'class': 'custom-tree'
			}
		});

		const treeElement = container.querySelector('.tree');
		expect(treeElement).toHaveAttribute('data-testid', 'tree-component');
		expect(treeElement).toHaveClass('custom-tree');
	});

	test('should handle large datasets', () => {
		const largeItems = Array.from({ length: 50 }, (_, i) => ({
			id: i + 1,
			name: `Item ${i + 1}`
		}));

		component = mount(Tree, {
			target: container,
			props: { items: largeItems }
		});

		expect(container.querySelectorAll('.tree-node')).toHaveLength(50);
	});

	test('should handle mixed node types', () => {
		const mixedItems = [
			{ id: 1, name: 'Regular Node' },
			{ id: 2, label: 'Node with label' },
			{ id: 3, name: 'Empty Folder', items: [] },
			{ id: 4, name: 'Folder with items', items: [{ id: 41, name: 'Child' }] }
		];

		component = mount(Tree, {
			target: container,
			props: { items: mixedItems }
		});

		expect(container.querySelectorAll('.tree-node')).toHaveLength(4);
	});
});
