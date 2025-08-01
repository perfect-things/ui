import { expect, test } from 'vitest';
import { mount, unmount } from 'svelte';
import ButtonGroup from './helpers/ButtonGroup.svelte';


test('ButtonGroup', async () => {
	const component = mount(ButtonGroup, { target: document.body });

	const btnGroup = document.body.querySelector('.test-class');

	expect(btnGroup).toBeInTheDocument();
	expect(btnGroup).toHaveClass('test-class');

	const buttons = document.body.querySelectorAll('button');
	expect(buttons.length).toBe(3);

	await unmount(component);
});
