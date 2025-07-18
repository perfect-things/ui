import { expect, test } from 'vitest';
import { mount, unmount } from 'svelte';

import { InputText } from '../../src/input';

test('InputText renders basic test', async () => {
	const props = $state({ id: 'test-id' });
	const component = mount(InputText, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'test-id');

	await unmount(component);
});
