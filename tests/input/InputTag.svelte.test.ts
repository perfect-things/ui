import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import { InputTag } from '../../src/input';


test('InputTag', async () => {
	const originalValue = 'tag1,anotherOne,long-tag-name';
	const props = $state({
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		class: 'test-class',
		label: 'Component1',
		error: 'error',
		info: '',
		value: originalValue,
		tags: ['newTag', 'anotherOne', 'long-tag-name'],
		onchange: vi.fn(),
	});

	const user = userEvent.setup();

	// @ts-ignore
	const component = mount(InputTag, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveAttribute('title', props.title);
	expect(cmp).toHaveClass('test-class');

	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveValue(originalValue);

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();

	err = cmp.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

	props.info = 'info';
	flushSync();

	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	props.info = '';
	flushSync();

	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	const box = cmp.querySelector('.input-inner');
	let list = document.body.querySelector('.input-tag-popover');
	expect(list).not.toBeInTheDocument();

	await user.click(box);

	list = document.body.querySelector('.input-tag-popover');
	expect(list).toBeInTheDocument();

	// add tag to value
	let tags = list.querySelectorAll('.ui-tag');
	expect(tags.length).toBe(props.tags.length);

	await user.click(tags[0]);

	expect(props.onchange).toHaveBeenCalledTimes(1);
	expect(input).toHaveValue(originalValue + ',' + props.tags[0]);

	// remove tag
	tags = box.querySelectorAll('.ui-tag');
	expect(tags.length).toBe(originalValue.split(',').length + 1);

	await user.click(tags[tags.length - 1]);

	expect(props.onchange).toHaveBeenCalled();
	expect(input).toHaveValue(originalValue);

	await unmount(component);
});
