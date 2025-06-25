import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import Tag from './helpers/Tag.svelte';


test('Tag', async () => {
	const mock = vi.fn();
	const props = { onclick: mock, clickable: true };
	// @ts-ignore
	const component = mount(Tag, { target: document.body, props });

	const tag = document.body.querySelector('.ui-tag');
	expect(tag).toBeInTheDocument();

	expect(tag).toHaveTextContent('test text');
	expect(tag).toHaveClass('danger');
	expect(tag.querySelector('svg')).toBeInTheDocument();

	await userEvent.click(tag);
	expect(mock).toHaveBeenCalled();

	unmount(component);
});
