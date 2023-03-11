import { render } from '@testing-library/svelte';
import ButtonGroup from './ButtonGroupTest.svelte';


test('ButtonGroup', async () => {
	const { container } = render(ButtonGroup);

	const btnGroup = container.querySelector('.test-class');

	expect(btnGroup).toBeInTheDocument();
	expect(btnGroup).toHaveClass('test-class');

	const buttons = container.querySelectorAll('button');
	expect(buttons.length).toBe(3);
});
