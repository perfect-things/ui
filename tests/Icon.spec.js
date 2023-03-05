import { Icon } from '../src/icon';
import { render } from '@testing-library/svelte';



test('Icon', async () => {
	const { container, component } = render(Icon, { name: 'alert', });
	const icon = container.querySelector('svg');

	expect(icon).toBeInTheDocument();
	expect(icon).toHaveClass('icon');
	expect(icon.classList.toString()).toContain('alert');

	// changing name to an alias
	await component.$set({ name: 'report' });
	const icon2 = container.querySelector('svg');
	expect(icon2.classList.toString()).toContain('analytics');
});
