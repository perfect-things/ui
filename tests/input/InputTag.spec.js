import { render, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';
import { InputTag } from '../../src/input';
import { waitForTimeout } from '../helpers/utils';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	class: 'test-class',
	error: 'error',
	label: 'Component1',
	value: 'tag1, anotherOne, long-tag-name',
	tags: ['newTag', 'anotherOne', 'long-tag-name'],
};


test('InputTag', async () => {
	const { container, component } = render(InputTag, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveAttribute('title', props.title);
	expect(cmp).toHaveClass('test-class');

	// verify props
	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveValue(props.value);

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

	const box = cmp.querySelector('.input-inner');
	let list = container.querySelector('.input-tag-popover');
	expect(list).not.toBeInTheDocument();

	await fireEvent.click(box);
	await waitForTimeout();

	list = container.querySelector('.input-tag-popover');
	expect(list).toBeInTheDocument();

	// add tag to value
	let tags = list.querySelectorAll('.ui-tag');
	expect(tags.length).toBe(props.tags.length);

	await fireEvent.click(tags[0]);
	await waitForTimeout();
	expect(mock).toHaveBeenCalledTimes(1);
	expect(input).toHaveValue(props.value + ', ' + props.tags[0]);


	// remove tag
	tags = box.querySelectorAll('.ui-tag');
	expect(tags.length).toBe(props.value.split(',').length + 1);

	await fireEvent.click(tags[tags.length - 1]);
	await waitForTimeout();
	expect(mock).toHaveBeenCalled();
	expect(input).toHaveValue(props.value);
});
