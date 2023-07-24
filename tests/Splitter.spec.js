import { render } from '@testing-library/svelte';
import Splitter from './helpers/Splitter.svelte';


test('Splitter', async () => {
	const { container } = render(Splitter);

	const cmp = container.querySelector('.split-wrap');
	expect(cmp).toBeInTheDocument();

	const splitter = container.querySelector('.splitter');
	expect(splitter).toBeInTheDocument();

	// add more test after Splitter rewrite
});
