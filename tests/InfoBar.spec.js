import { InfoBar, Info, Warning, Error, Success } from '../src/info-bar';
import { render } from '@testing-library/svelte';


const tablerIcon = {
	info: 'icon-tabler-info-circle',
	warning: 'icon-tabler-alert-triangle',
	error: 'icon-tabler-alert-circle',
	success: 'icon-tabler-circle-check',
};

test('InfoBar', async () => {
	const props = {
		id: 'test',
		msg: 'test',
		class: 'test',
		type: 'error',
	};
	const { container, component } = render(InfoBar, props);
	let cmp = container.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveClass('info-bar-error');

	const msg = cmp.querySelector('p');
	expect(msg).toHaveAttribute('id', 'test');
	expect(msg).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon[props.type]);

	// hide info-bar
	await component.$set({ msg: '' });
	cmp = container.querySelector('.info-bar');
	expect(cmp).not.toBeInTheDocument();
});


test('InfoBar - Info', async () => {
	const props = {
		id: 'test',
		msg: 'test',
		class: 'test',
	};
	const { container } = render(Info, props);
	const cmp = container.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-info');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.info);
});


test('InfoBar - Warning', async () => {
	const props = {
		id: 'test',
		msg: 'test',
		class: 'test',
	};
	const { container } = render(Warning, props);
	const cmp = container.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-warning');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.warning);
});


test('InfoBar - Error', async () => {
	const props = {
		id: 'test',
		msg: 'test',
		class: 'test',
	};
	const { container } = render(Error, props);
	const cmp = container.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-error');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.error);
});


test('InfoBar - Success', async () => {
	const props = {
		id: 'test',
		msg: 'test',
		class: 'test',
	};
	const { container } = render(Success, props);
	const cmp = container.querySelector('.info-bar');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('info-bar-success');
	expect(cmp).toHaveClass('test');
	expect(cmp).toHaveTextContent('test');

	const icon = cmp.querySelector('svg');
	expect(icon).toHaveClass(tablerIcon.success);
});
