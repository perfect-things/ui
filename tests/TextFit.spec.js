import TextFit from './helpers/TextFit.svelte';
import { render } from '@testing-library/svelte';
import './helpers/utils.js';

test('TextFit', async () => {
	const { container } = render(TextFit);

	const cmp = container.querySelector('.wrapper');
	expect(cmp).toBeInTheDocument();

	const fitter = container.querySelector('.text-fit');
	expect(fitter).toBeInTheDocument();
	expect(fitter).toHaveTextContent('Hello world');

	// cannot be reliably measured in jsdom
	expect(fitter).toHaveStyle('transform: matrix(0, 0, 0, 0, 0, 0)');
});
