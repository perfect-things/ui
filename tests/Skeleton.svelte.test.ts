import { beforeEach, expect, test } from 'vitest';
import { mount, unmount } from 'svelte';
import {
	SkeletonRect,
	SkeletonCircle,
	SkeletonText,
	SkeletonImage,
	SkeletonHStack,
	SkeletonVStack,
	SkeletonGrid,
} from '../src';
import SkeletonLayout from './helpers/Skeleton.svelte';


beforeEach(() => {
	document.body.innerHTML = '';
});


test('SkeletonRect renders with default classes', async () => {
	const component = mount(SkeletonRect, { target: document.body });

	const el = document.body.querySelector('.skeleton-shape.skeleton-rect');
	expect(el).toBeInTheDocument();

	await unmount(component);
});


test('SkeletonRect applies numeric width/height as pixels', async () => {
	const component = mount(SkeletonRect, {
		target: document.body,
		props: { width: 200, height: 40 },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-rect');
	expect(el?.style.width).toBe('200px');
	expect(el?.style.height).toBe('40px');

	await unmount(component);
});


test('SkeletonRect applies string width/height as-is', async () => {
	const component = mount(SkeletonRect, {
		target: document.body,
		props: { width: '50%', height: '4em' },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-rect');
	expect(el?.style.width).toBe('50%');
	expect(el?.style.height).toBe('4em');

	await unmount(component);
});


test('SkeletonRect applies custom class', async () => {
	const component = mount(SkeletonRect, {
		target: document.body,
		props: { class: 'my-rect' },
	});

	const el = document.body.querySelector('.skeleton-rect');
	expect(el).toHaveClass('my-rect');

	await unmount(component);
});


test('SkeletonCircle renders with default size 60px', async () => {
	const component = mount(SkeletonCircle, { target: document.body });

	const el = document.body.querySelector<HTMLElement>('.skeleton-shape.skeleton-circle');
	expect(el).toBeInTheDocument();
	expect(el?.style.width).toBe('60px');
	expect(el?.style.height).toBe('60px');

	await unmount(component);
});


test('SkeletonCircle applies numeric size as pixels', async () => {
	const component = mount(SkeletonCircle, {
		target: document.body,
		props: { size: 80 },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-circle');
	expect(el?.style.width).toBe('80px');
	expect(el?.style.height).toBe('80px');

	await unmount(component);
});


test('SkeletonCircle applies string size as-is', async () => {
	const component = mount(SkeletonCircle, {
		target: document.body,
		props: { size: '5em' },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-circle');
	expect(el?.style.width).toBe('5em');
	expect(el?.style.height).toBe('5em');

	await unmount(component);
});


test('SkeletonCircle applies custom class', async () => {
	const component = mount(SkeletonCircle, {
		target: document.body,
		props: { class: 'avatar' },
	});

	const el = document.body.querySelector('.skeleton-circle');
	expect(el).toHaveClass('avatar');

	await unmount(component);
});


test('SkeletonText renders default 3 lines wrapped in VStack', async () => {
	const component = mount(SkeletonText, { target: document.body });

	const wrapper = document.body.querySelector('.skeleton-vstack.skeleton-text');
	expect(wrapper).toBeInTheDocument();

	const lines = wrapper.querySelectorAll('.skeleton-rect.skeleton-line');
	expect(lines.length).toBe(3);

	await unmount(component);
});


test('SkeletonText renders the requested number of lines', async () => {
	const component = mount(SkeletonText, {
		target: document.body,
		props: { size: 7 },
	});

	const lines = document.body.querySelectorAll('.skeleton-text .skeleton-line');
	expect(lines.length).toBe(7);

	await unmount(component);
});


test('SkeletonText applies custom class on the wrapper', async () => {
	const component = mount(SkeletonText, {
		target: document.body,
		props: { class: 'paragraph' },
	});

	const wrapper = document.body.querySelector('.skeleton-text');
	expect(wrapper).toHaveClass('paragraph');

	await unmount(component);
});


test('SkeletonImage renders a rect with photo icon and default dimensions', async () => {
	const component = mount(SkeletonImage, { target: document.body });

	const el = document.body.querySelector<HTMLElement>('.skeleton-rect.skeleton-img');
	expect(el).toBeInTheDocument();
	expect(el?.style.width).toBe('100%');
	expect(el?.style.height).toBe('120px');

	const icon = el.querySelector('svg');
	expect(icon).toBeInTheDocument();

	await unmount(component);
});


test('SkeletonImage applies custom width and height', async () => {
	const component = mount(SkeletonImage, {
		target: document.body,
		props: { width: 240, height: '10em' },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-img');
	expect(el?.style.width).toBe('240px');
	expect(el?.style.height).toBe('10em');

	await unmount(component);
});


test('SkeletonImage applies custom class', async () => {
	const component = mount(SkeletonImage, {
		target: document.body,
		props: { class: 'hero' },
	});

	const el = document.body.querySelector('.skeleton-img');
	expect(el).toHaveClass('hero');

	await unmount(component);
});


test('SkeletonHStack renders container with custom class', async () => {
	const component = mount(SkeletonHStack, {
		target: document.body,
		props: { class: 'row' },
	});

	const el = document.body.querySelector('.skeleton-hstack');
	expect(el).toBeInTheDocument();
	expect(el).toHaveClass('row');

	await unmount(component);
});


test('SkeletonHStack renders its children', async () => {
	const component = mount(SkeletonLayout, {
		target: document.body,
		props: { layout: 'hstack', class: 'row' },
	});

	const el = document.body.querySelector('.skeleton-hstack.row');
	expect(el).toBeInTheDocument();

	const children = el.querySelectorAll(':scope > .child');
	expect(children.length).toBe(2);

	await unmount(component);
});


test('SkeletonVStack renders container with custom class', async () => {
	const component = mount(SkeletonVStack, {
		target: document.body,
		props: { class: 'col' },
	});

	const el = document.body.querySelector('.skeleton-vstack');
	expect(el).toBeInTheDocument();
	expect(el).toHaveClass('col');

	await unmount(component);
});


test('SkeletonVStack renders its children', async () => {
	const component = mount(SkeletonLayout, {
		target: document.body,
		props: { layout: 'vstack', class: 'col' },
	});

	const el = document.body.querySelector('.skeleton-vstack.col');
	expect(el).toBeInTheDocument();

	const children = el.querySelectorAll(':scope > .child');
	expect(children.length).toBe(2);

	await unmount(component);
});


test('SkeletonGrid renders with default 150px min column width', async () => {
	const component = mount(SkeletonGrid, { target: document.body });

	const el = document.body.querySelector<HTMLElement>('.skeleton-grid');
	expect(el).toBeInTheDocument();
	expect(el?.getAttribute('style')).toContain('minmax(150px, 1fr)');

	await unmount(component);
});


test('SkeletonGrid accepts numeric size as pixels', async () => {
	const component = mount(SkeletonGrid, {
		target: document.body,
		props: { size: 220 },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-grid');
	expect(el?.getAttribute('style')).toContain('minmax(220px, 1fr)');

	await unmount(component);
});


test('SkeletonGrid accepts string size as-is', async () => {
	const component = mount(SkeletonGrid, {
		target: document.body,
		props: { size: '12rem' },
	});

	const el = document.body.querySelector<HTMLElement>('.skeleton-grid');
	expect(el?.getAttribute('style')).toContain('minmax(12rem, 1fr)');

	await unmount(component);
});


test('SkeletonGrid renders its children', async () => {
	const component = mount(SkeletonLayout, {
		target: document.body,
		props: { layout: 'grid', class: 'gallery', size: 120 },
	});

	const el = document.body.querySelector('.skeleton-grid.gallery');
	expect(el).toBeInTheDocument();

	const children = el.querySelectorAll(':scope > .child');
	expect(children.length).toBe(3);

	await unmount(component);
});
