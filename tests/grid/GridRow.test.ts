import { afterEach, describe, expect, test } from 'vitest';
import { mount, unmount } from 'svelte';
import Grid from '../helpers/Grid.svelte';


function renderGrid (scenario: string, data: any[]) {
	const target = document.body;
	return mount(Grid, { target, props: { scenario, data }, });
}

describe('GridRow cell rendering', () => {
	let component: ReturnType<typeof mount> | null = null;

	afterEach(() => {
		if (component) unmount(component);
		component = null;
		document.body.innerHTML = '';
	});


	test('renderer returning an HTML string is rendered into the cell', () => {
		const data = [{ id: 1, name: 'Alice' }];
		component = renderGrid('legacy-string', data);

		const cell = document.body.querySelector('tbody td em.string-cell');
		expect(cell).not.toBeNull();
		expect(cell.textContent).toBe('Alice');
	});


	test('snippet renders its output in the cell', () => {
		const data = [{ id: 1, name: 'Carol' }];
		component = renderGrid('snippet-only', data);

		const cell = document.body.querySelector('[data-testid="snippet-cell"]');
		expect(cell).not.toBeNull();
		expect(cell.textContent).toBe('Carol [snippet]');
	});


	test('snippet wins when both snippet and renderer are set on the same column', () => {
		const data = [{ id: 1, name: 'Dave' }];
		component = renderGrid('both', data);

		expect(document.body.querySelector('[data-testid="snippet-cell"]')).not.toBeNull();
		expect(document.body.querySelector('em.string-cell')).toBeNull();
	});


	test('column with neither snippet nor renderer renders the raw field value', () => {
		const data = [{ id: 1, name: 'Eve' }];
		component = renderGrid('neither', data);

		const cell = document.body.querySelector('tbody td');
		expect(cell).not.toBeNull();
		expect(cell.textContent.trim()).toBe('Eve');
	});
});
