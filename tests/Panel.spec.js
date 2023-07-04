import { vi } from 'vitest';
import { Panel } from '../src/panel';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('Panel', async () => {
	const props = {
		title: 'Panel1',
		class: 'test-class',
		collapsible: 'true'
	};
	const { container, component } = render(Panel, props);

	const openMock = vi.fn();
	const closeMock = vi.fn();
	component.$on('open', openMock);
	component.$on('close', closeMock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).not.toHaveClass('expanded');

	component.toggle();
	await waitForTimeout();

	expect(cmp).toHaveClass('expanded');
	expect(openMock).toHaveBeenCalled();

	const PanelTitle = container.querySelector('.test-class .panel-header');
	expect(PanelTitle).toHaveTextContent(props.title);

	const panel = container.querySelector('.test-class details');
	await fireEvent.click(panel);
	await waitForTimeout();

	expect(cmp).not.toHaveClass('expanded');
	expect(closeMock).toHaveBeenCalled();
});
