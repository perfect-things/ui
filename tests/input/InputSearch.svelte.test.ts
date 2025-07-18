import { expect, test, vi } from 'vitest';
import { mount, unmount } from 'svelte';
import { InputSearch } from '../../src/input';

test('InputSearch renders with correct props', async () => {
	const props = $state({
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		placeholder: 'Component1',
		class: 'test-class',
		required: true,
		error: 'error',
		label: 'Component1',
		onchange: vi.fn()
	});

	const component = mount(InputSearch, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(cmp).toHaveAttribute('title', props.title);

	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');

	await unmount(component);
});
