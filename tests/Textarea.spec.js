import { vi } from 'vitest';
import { render } from '@testing-library/svelte';
import { Textarea } from '../src/input';
import { waitForTimeout } from './helpers/utils';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	error: 'error',
	label: 'Component1',
};


test('InputText', async () => {
	const { container, component, getByTitle } = render(Textarea, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	// verify props
	const input = getByTitle(props.title);
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	await component.$set({ error: '' });
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);
});
