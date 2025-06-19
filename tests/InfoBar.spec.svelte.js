import { expect, test } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { InfoBar, Info, Warning, Error, Success } from '../src/info-bar';


const tablerIcon = {
	info: 'icon-tabler-info-circle',
	warning: 'icon-tabler-alert-triangle',
	error: 'icon-tabler-alert-circle',
	success: 'icon-tabler-circle-check',
};

test('InfoBar', async () => {
	const props = $state({
		id: 'test',
		msg: 'test',
		class: 'test',
		type: 'error',
	});

	// @ts-ignore
	const component = mount(InfoBar, { target: document.body, props });

	let cmp = document.body.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveClass('info-bar-error');

	const msg = cmp.querySelector('p');
	expect(msg).toHaveAttribute('id', 'test');
	expect(msg).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon[props.type]);

	// hide info-bar
	props.msg = '';
	flushSync();
	cmp = document.body.querySelector('.info-bar');
	expect(cmp).not.toBeInTheDocument();

	unmount(component);
});


test('InfoBar - Info', async () => {
	const props = $state({
		id: 'test',
		msg: 'test',
		class: 'test',
	});

	const component = mount(Info, {
		target: document.body,
		props
	});

	const cmp = document.body.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-info');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.info);

	unmount(component);
});


test('InfoBar - Warning', async () => {
	const props = $state({
		id: 'test',
		msg: 'test',
		class: 'test',
	});

	const component = mount(Warning, {
		target: document.body,
		props
	});

	const cmp = document.body.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-warning');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.warning);

	unmount(component);
});


test('InfoBar - Error', async () => {
	const props = $state({
		id: 'test',
		msg: 'test',
		class: 'test',
	});

	const component = mount(Error, {
		target: document.body,
		props
	});

	const cmp = document.body.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-error');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.error);

	unmount(component);
});


test('InfoBar - Success', async () => {
	const props = $state({
		id: 'test',
		msg: 'test',
		class: 'test',
	});

	const component = mount(Success, {
		target: document.body,
		props
	});

	const cmp = document.body.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-success');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.success);

	unmount(component);
});
