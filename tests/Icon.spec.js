import { Icon } from '../src/icon';
import { render } from '@testing-library/svelte';


test('Icon', async () => {
	const { getByTitle } = render(Icon, { name: 'alert', });
	const icon = getByTitle('alert');
	expect(icon).toBeInTheDocument();
});
