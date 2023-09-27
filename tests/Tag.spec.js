import { render, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';
import Tag from './helpers/Tag.svelte';
import { waitForTimeout } from './helpers/utils';


test('Tag', async () => {
	const { container, component } = render(Tag);
	const mock = jest.fn();
	component.$on('click', mock);

	const tag = container.querySelector('.test-class');
	expect(tag).toBeInTheDocument();

	expect(tag).toHaveTextContent('test text');
	expect(tag).toHaveClass('danger');
	expect(tag).toHaveAttribute('style', 'background-color: danger;');
	expect(tag.querySelector('svg')).toBeInTheDocument();

	await fireEvent.click(tag);
	await waitForTimeout();
	expect(mock).toHaveBeenCalled();
});
