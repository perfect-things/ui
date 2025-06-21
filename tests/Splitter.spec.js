import { expect, test } from 'vitest';
import { mount, unmount } from 'svelte';
import Splitter from './helpers/Splitter.svelte';


test('Splitter', async () => {
	const props = {};

	const component = mount(Splitter, { target: document.body, props });

	const cmp = document.body.querySelector('.split-wrap');
	expect(cmp).toBeInTheDocument();

	const splitter = document.body.querySelector('.splitter');
	expect(splitter).toBeInTheDocument();

	// add more test after Splitter rewrite

	unmount(component);
});
