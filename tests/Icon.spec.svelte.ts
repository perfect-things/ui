import { expect, test } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { Icon } from '../src/icon';



test('Icon', async () => {
	const props = $state({ name: 'alert' });
	const component = mount(Icon, { target: document.body, props });

	const icon = document.body.querySelector('svg');
	expect(icon).toBeInTheDocument();
	expect(icon).toHaveClass('icon');
	expect(icon.classList.toString()).toContain('alert');

	// changing name to an alias
	props.name = 'report';
	flushSync();
	const icon2 = document.body.querySelector('svg');
	expect(icon2.classList.toString()).toContain('analytics');

	unmount(component);
});
