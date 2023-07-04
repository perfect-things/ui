import { vi } from 'vitest';
import { PushButton } from '../src/push-button';
import { render, fireEvent } from '@testing-library/svelte';


test('PushButton', async () => {
	const props = {
		id: 'Button1',
		title: 'Button1',
		class: 'test-class',
	};
	const { getByTitle, component } = render(PushButton, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const btn = getByTitle('Button1');
	expect(btn).toBeInTheDocument();
	expect(btn).toHaveAttribute('id', 'Button1');
	expect(btn).toHaveAttribute('title', 'Button1');
	expect(btn).toHaveClass('test-class');

	await fireEvent.mouseDown(btn);
	expect(mock).toHaveBeenCalled();


	await component.$set({ success: true });
	expect(btn).toHaveClass('success');
	await component.$set({ success: false });

	await component.$set({ danger: true });
	expect(btn).toHaveClass('danger');
	await component.$set({ danger: false });

	await component.$set({ warning: true });
	expect(btn).toHaveClass('warning');
	await component.$set({ warning: false });

	await component.$set({ round: true });
	expect(btn).toHaveClass('round');
	await component.$set({ round: false });

	await component.$set({ icon: 'alert' });
	expect(btn.querySelector('svg')).toBeInTheDocument();
	await component.$set({ link: false });
});
