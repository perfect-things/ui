import { describe, test, beforeEach, afterEach, expect, vi } from 'vitest';
import { mount, unmount } from 'svelte';
import SplitterTest from './helpers/Splitter.svelte';

describe('Splitter component', () => {
	let component: any;
	let mockOnChanged: any;

	beforeEach(() => {
		// Clear DOM
		document.body.innerHTML = '';

		// Mock DOM APIs for getBoundingClientRect
		Element.prototype.getBoundingClientRect = vi.fn(() => ({
			width: 400,
			height: 300,
			left: 0,
			top: 0,
			right: 400,
			bottom: 300,
			x: 0,
			y: 0,
			toJSON: () => {}
		}));

		// Mock getComputedStyle for CSS calculations
		window.getComputedStyle = vi.fn(() => ({
			flexDirection: 'row',
			minWidth: '100px',
			maxWidth: '600px',
			minHeight: '50px',
			maxHeight: '400px',
			borderLeftWidth: '0px',
			borderRightWidth: '0px',
			borderTopWidth: '0px',
			borderBottomWidth: '0px',
			paddingLeft: '0px',
			paddingRight: '0px',
			paddingTop: '0px',
			paddingBottom: '0px',
		})) as any;

		mockOnChanged = vi.fn();
	});

	afterEach(async () => {
		if (component) {
			await unmount(component);
			component = null;
		}
		document.body.innerHTML = '';
		vi.clearAllMocks();
	});

	describe('Basic Rendering & Setup', () => {
		test('renders splitter component correctly', () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			const wrapper = document.body.querySelector('.split-wrap');
			expect(wrapper).toBeTruthy();

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter?.classList.contains('splitter')).toBe(true);
		});

		test('creates proper DOM structure with left and right panels', () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			const leftPanel = document.body.querySelector('.split-box.min-w');
			const rightPanel = document.body.querySelector('.split-box:not(.min-w)');
			const splitter = document.body.querySelector('.splitter');

			expect(leftPanel).toBeTruthy();
			expect(rightPanel).toBeTruthy();
			expect(splitter).toBeTruthy();

			// Check that splitter is between the panels
			expect(leftPanel?.nextElementSibling).toBe(splitter);
			expect(splitter?.nextElementSibling).toBe(rightPanel);
		});

		test('applies horizontal layout by default', () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter?.classList.contains('vertical')).toBe(false);
		});
	});

	describe('Drag Interaction Testing', () => {
		test('starts dragging on mousedown', async () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			// Wait for component initialization
			await new Promise(resolve => setTimeout(resolve, 50));

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter).toBeInstanceOf(HTMLElement);

			// Start drag
			(splitter as HTMLElement).dispatchEvent(new MouseEvent('mousedown', {
				bubbles: true,
				clientX: 200,
				clientY: 150
			}));

			// Wait for Svelte reactivity to update DOM
			await new Promise(resolve => requestAnimationFrame(resolve));

			expect(splitter?.classList.contains('is-dragging')).toBe(true);
		});

		test('handles horizontal drag movement', async () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter).toBeInstanceOf(HTMLElement);

			// Start drag
			(splitter as HTMLElement).dispatchEvent(new MouseEvent('mousedown', {
				bubbles: true,
				clientX: 200,
				clientY: 150
			}));

			// Wait for DOM update
			await new Promise(resolve => requestAnimationFrame(resolve));

			// Move mouse
			document.dispatchEvent(new MouseEvent('mousemove', {
				bubbles: true,
				clientX: 250,
				clientY: 150
			}));

			// End drag
			document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

			// Wait for DOM update
			await new Promise(resolve => requestAnimationFrame(resolve));

			expect(splitter?.classList.contains('is-dragging')).toBe(false);
		});

		test('changes cursor during drag', async () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			// Wait for component initialization
			await new Promise(resolve => setTimeout(resolve, 50));

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter).toBeInstanceOf(HTMLElement);

			// Start drag
			(splitter as HTMLElement).dispatchEvent(new MouseEvent('mousedown', {
				bubbles: true,
				clientX: 200,
				clientY: 150
			}));

			// During drag, body should have resize cursor (ew-resize for horizontal)
			expect(document.body.style.cursor).toBe('ew-resize');

			// End drag
			document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

			// Cursor should be reset
			expect(document.body.style.cursor).toBe('');
		});
	});

	describe('Event Callbacks', () => {
		test('calls onchanged callback after drag ends', async () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			// Wait for component initialization
			await new Promise(resolve => setTimeout(resolve, 50));

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter).toBeInstanceOf(HTMLElement);

			// Perform drag operation
			(splitter as HTMLElement).dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
			document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
			document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

			// Wait for callback
			await new Promise(resolve => setTimeout(resolve, 10));

			// Callback should be called
			expect(mockOnChanged).toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		test('handles component unmount gracefully', async () => {
			component = mount(SplitterTest, {
				target: document.body,
				props: { onchanged: mockOnChanged }
			});

			// Wait for component initialization
			await new Promise(resolve => setTimeout(resolve, 50));

			const splitter = document.body.querySelector('.splitter');
			expect(splitter).toBeTruthy();
			expect(splitter).toBeInstanceOf(HTMLElement);

			// Start drag to attach listeners
			(splitter as HTMLElement).dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

			// Wait for DOM update
			await new Promise(resolve => requestAnimationFrame(resolve));

			expect(splitter?.classList.contains('is-dragging')).toBe(true);

			// Unmount component
			await unmount(component);
			component = null;

			// Should not throw errors when dragging after unmount
			expect(() => {
				document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
				document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
			}).not.toThrow();
		});
	});
});
