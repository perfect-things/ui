import type { DataItem } from '../../src/grid/types';

import { describe, expect, test, beforeEach, vi } from 'vitest';
import { get } from 'svelte/store';
import { DataStore } from '../../src/grid/DataStore';


describe('DataStore', () => {
	let store: ReturnType<typeof DataStore>;
	let mockData: DataItem[];

	beforeEach(() => {
		store = DataStore();
		mockData = [
			{ id: 1, field: 'Item 1', selected: false },
			{ id: 2, field: 'Item 2', selected: false },
			{ id: 3, field: 'Item 3', selected: false },
			{ id: 4, field: 'Item 4', selected: false },
			{ id: 5, field: 'Item 5', selected: false }
		];
		// Clear any existing DOM
		document.body.innerHTML = '';
	});

	describe('basic store functionality', () => {
		test('should initialize with empty array', () => {
			const data = store.get();
			expect(data).toEqual([]);
		});

		test('should set and get data', () => {
			store.set(mockData);
			const data = store.get();
			expect(data).toEqual(mockData);
		});

		test('should subscribe to store changes', () => {
			const mockCallback = vi.fn();
			const unsubscribe = store.subscribe(mockCallback);

			store.set(mockData);
			expect(mockCallback).toHaveBeenCalledWith(mockData);

			unsubscribe();
		});

		test('should reset store to empty array', () => {
			store.set(mockData);
			store.reset();
			const data = store.get();
			expect(data).toEqual([]);
		});
	});

	describe('store properties', () => {
		test('should have columns store', () => {
			expect(store.columns).toBeDefined();
			expect(typeof store.columns.subscribe).toBe('function');
		});

		test('should have allSelected store', () => {
			expect(store.allSelected).toBeDefined();
			expect(typeof store.allSelected.subscribe).toBe('function');
			expect(get(store.allSelected)).toBe(false);
		});

		test('should have someSelected store', () => {
			expect(store.someSelected).toBeDefined();
			expect(typeof store.someSelected.subscribe).toBe('function');
			expect(get(store.someSelected)).toBe(false);
		});

		test('should have sortField store', () => {
			expect(store.sortField).toBeDefined();
			expect(typeof store.sortField.subscribe).toBe('function');
			expect(get(store.sortField)).toBe('');
		});

		test('should have sortOrder store', () => {
			expect(store.sortOrder).toBeDefined();
			expect(typeof store.sortOrder.subscribe).toBe('function');
			expect(get(store.sortOrder)).toBe('ASC');
		});
	});

	describe('toggleSelection', () => {
		beforeEach(() => {
			store.set(mockData);
		});

		test('should toggle item selection', () => {
			const event = { shiftKey: false } as any;
			const item = mockData[0];

			store.toggleSelection(item, event);

			const data = store.get();
			expect(data[0].selected).toBe(true);
		});

		test('should toggle item selection back to false', () => {
			const event = { shiftKey: false } as any;
			const item = mockData[0];

			// First toggle
			store.toggleSelection(item, event);
			let data = store.get();
			expect(data[0].selected).toBe(true);

			// Second toggle
			store.toggleSelection(item, event);
			data = store.get();
			expect(data[0].selected).toBe(false);
		});

		test('should force selection state when forceState is provided', () => {
			const event = { shiftKey: false } as any;
			const item = mockData[0];

			// Force to true
			store.toggleSelection(item, event, true);
			let data = store.get();
			expect(data[0].selected).toBe(true);

			// Force to false
			store.toggleSelection(item, event, false);
			data = store.get();
			expect(data[0].selected).toBe(false);

			// Force to true again (should not toggle)
			store.toggleSelection(item, event, true);
			data = store.get();
			expect(data[0].selected).toBe(true);
		});

		test('should update selection counters after toggle', () => {
			const event = { shiftKey: false } as any;

			// Select first item
			store.toggleSelection(mockData[0], event);
			expect(get(store.someSelected)).toBe(true);
			expect(get(store.allSelected)).toBe(false);

			// Select all items
			mockData.forEach(item => store.toggleSelection(item, event, true));
			expect(get(store.someSelected)).toBe(false);
			expect(get(store.allSelected)).toBe(true);
		});

		test('should handle shift+click for range selection', () => {
			// Create mock DOM structure
			const gridEl = document.createElement('div');
			gridEl.className = 'grid';

			const items = mockData.map(item => {
				const itemEl = document.createElement('div');
				itemEl.className = 'item';
				itemEl.dataset.id = item.id.toString();
				gridEl.appendChild(itemEl);
				return itemEl;
			});

			document.body.appendChild(gridEl);

			// Mock event for first selection (no shift)
			const firstEvent = {
				shiftKey: false,
				target: items[1] // Select item at index 1 (id: 2)
			} as any;

			store.toggleSelection(mockData[1], firstEvent);

			// Mock event for shift+click selection
			const shiftEvent = {
				shiftKey: true,
				target: items[3] // Select item at index 3 (id: 4)
			} as any;

			store.toggleSelection(mockData[3], shiftEvent);

			const data = store.get();
			// Should select items between index 1 and 3 (inclusive)
			expect(data[1].selected).toBe(true);
			expect(data[2].selected).toBe(true);
			expect(data[3].selected).toBe(true);
			// Others should not be selected
			expect(data[0].selected).toBe(false);
			expect(data[4].selected).toBe(false);
		});

		test('should handle shift+click when no last selected item', () => {
			const event = { shiftKey: true } as any;

			// This should not throw an error and should handle gracefully
			expect(() => store.toggleSelection(mockData[0], event)).not.toThrow();
		});
	});

	describe('toggleSelectAll', () => {
		beforeEach(() => {
			store.set(mockData);
		});

		test('should select all items when none are selected', () => {
			store.toggleSelectAll();

			const data = store.get();
			data.forEach(item => expect(item.selected).toBe(true));
			expect(get(store.allSelected)).toBe(true);
			expect(get(store.someSelected)).toBe(false);
		});

		test('should deselect all items when all are selected', () => {
			// First select all
			store.toggleSelectAll();
			expect(get(store.allSelected)).toBe(true);

			// Then toggle again to deselect all
			store.toggleSelectAll();

			const data = store.get();
			data.forEach(item => expect(item.selected).toBe(false));
			expect(get(store.allSelected)).toBe(false);
			expect(get(store.someSelected)).toBe(false);
		});

		test('should deselect all when some are selected', () => {
			// Select one item first
			const event = { shiftKey: false } as any;
			store.toggleSelection(mockData[0], event);
			expect(get(store.someSelected)).toBe(true);

			// Toggle select all should deselect all items when some are selected
			store.toggleSelectAll();

			const data = store.get();
			data.forEach(item => expect(item.selected).toBe(false));
			expect(get(store.allSelected)).toBe(false);
			expect(get(store.someSelected)).toBe(false);
		});

		test('should force select all when forceState is true', () => {
			store.toggleSelectAll(true);

			const data = store.get();
			data.forEach(item => expect(item.selected).toBe(true));
			expect(get(store.allSelected)).toBe(true);
		});

		test('should force deselect all when forceState is false', () => {
			// First select all
			store.toggleSelectAll(true);

			// Then force deselect
			store.toggleSelectAll(false);

			const data = store.get();
			data.forEach(item => expect(item.selected).toBe(false));
			expect(get(store.allSelected)).toBe(false);
		});
	});

	describe('sorting functionality', () => {
		beforeEach(() => {
			const unsortedData = [
				{ id: 3, field: 'Charlie', selected: false },
				{ id: 1, field: 'Alice', selected: false },
				{ id: 2, field: 'Bob', selected: false }
			];
			store.set(unsortedData);
		});

		test('should sort by string field in ascending order', () => {
			store.sortField.set('field');

			const data = store.get();
			expect(data[0].field).toBe('Alice');
			expect(data[1].field).toBe('Bob');
			expect(data[2].field).toBe('Charlie');
		});

		test('should sort by string field in descending order', () => {
			store.sortField.set('field');
			store.sortOrder.set('DESC');

			const data = store.get();
			expect(data[0].field).toBe('Charlie');
			expect(data[1].field).toBe('Bob');
			expect(data[2].field).toBe('Alice');
		});

		test('should sort by numeric field in ascending order', () => {
			const numericData: (DataItem & { value: number })[] = [
				{ id: 30, value: 30, selected: false },
				{ id: 10, value: 10, selected: false },
				{ id: 20, value: 20, selected: false }
			];
			store.set(numericData as any);
			store.sortField.set('value');

			const data = store.get() as any;
			expect(data[0].value).toBe(10);
			expect(data[1].value).toBe(20);
			expect(data[2].value).toBe(30);
		});

		test('should sort by numeric field in descending order', () => {
			const numericData: (DataItem & { value: number })[] = [
				{ id: 30, value: 30, selected: false },
				{ id: 10, value: 10, selected: false },
				{ id: 20, value: 20, selected: false }
			];
			store.set(numericData as any);
			store.sortField.set('value');
			store.sortOrder.set('DESC');

			const data = store.get() as any;
			expect(data[0].value).toBe(30);
			expect(data[1].value).toBe(20);
			expect(data[2].value).toBe(10);
		});

		test('should sort by id when sortField is empty and triggered', () => {
			// First set a field to trigger initial sort
			store.sortField.set('field');
			// Then set to empty to trigger id sort
			store.sortField.set('');

			const data = store.get();
			expect(data[0].id).toBe(1);
			expect(data[1].id).toBe(2);
			expect(data[2].id).toBe(3);
		});

		test('should handle negative numbers in numeric sort', () => {
			const numericData: (DataItem & { value: number })[] = [
				{ id: 1, value: -30, selected: false },
				{ id: 2, value: 10, selected: false },
				{ id: 3, value: -20, selected: false }
			];
			store.set(numericData as any);
			store.sortField.set('value');

			const data = store.get() as any;
			// Math.abs is used in sorting, so order should be by absolute value
			expect(data[0].value).toBe(10);   // abs(10) = 10
			expect(data[1].value).toBe(-20);  // abs(-20) = 20
			expect(data[2].value).toBe(-30);  // abs(-30) = 30
		});

		test('should handle empty data when sorting', () => {
			store.set([]);
			store.sortField.set('field');

			const data = store.get();
			expect(data).toEqual([]);
		});

		test('should handle null data when sorting', () => {
			store.set(null as any);
			store.sortField.set('field');

			const data = store.get();
			expect(data).toEqual([]);
		});
	});

	describe('edge cases', () => {
		test('should handle item with non-existent id in toggleSelection', () => {
			store.set(mockData);
			const nonExistentItem = { id: 999, field: 'Non-existent', selected: false };
			const event = { shiftKey: false } as any;

			// This should throw an error because getById returns undefined
			expect(() => store.toggleSelection(nonExistentItem, event)).toThrow();
		});

		test('should handle empty data for selection counters', () => {
			store.set([]);

			expect(get(store.allSelected)).toBe(false);
			expect(get(store.someSelected)).toBe(false);
		});

		test('should handle data with all items pre-selected', () => {
			const preSelectedData = mockData.map(item => ({ ...item, selected: true }));
			store.set(preSelectedData);

			// Manually trigger counter update (simulating what happens in real usage)
			const event = { shiftKey: false } as any;
			store.toggleSelection(preSelectedData[0], event, true);

			expect(get(store.allSelected)).toBe(true);
			expect(get(store.someSelected)).toBe(false);
		});

		test('should maintain selection state when sorting', () => {
			// Select some items first
			store.set(mockData);
			const event = { shiftKey: false } as any;
			store.toggleSelection(mockData[0], event, true);
			store.toggleSelection(mockData[2], event, true);

			// Now sort
			store.sortField.set('field');

			const data = store.get();
			const selectedItems = data.filter(item => item.selected);
			expect(selectedItems).toHaveLength(2);
			expect(selectedItems.map(item => item.id).sort()).toEqual([1, 3]);
		});
	});
});
