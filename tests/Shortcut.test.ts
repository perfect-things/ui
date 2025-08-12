import { describe, expect, test, beforeEach } from 'vitest';
import { mount } from 'svelte';
import { Shortcut } from '../src';



describe('Shortcut', () => {

	beforeEach(() => {
		document.body.innerHTML = '';
	});


	test('doesn\'t render when `keys` is empty', () => {
		mount(Shortcut, { target: document.body, props: { keys: '' } });
		const shortcut = document.body.querySelector('.shortcut');
		expect(shortcut).not.toBeInTheDocument();
	});


	test('renders correctly with keys', () => {
		mount(Shortcut, { target: document.body, props: { keys: 'ctrl c' } });

		const shortcut = document.body.querySelector('.shortcut');
		expect(shortcut).toBeInTheDocument();
		expect(shortcut).toHaveTextContent('⌃');
		expect(shortcut).toHaveTextContent('C');
	});


	test('correctly transforms keys 1', () => {
		mount(Shortcut, { target: document.body, props: { keys: 'cmd+shift+s' } });

		const shortcut = document.body.querySelector('.shortcut');
		expect(shortcut).toBeInTheDocument();
		expect(shortcut).toHaveTextContent('⌘');
		expect(shortcut).toHaveTextContent('⇧');
		expect(shortcut).toHaveTextContent('S');
	});


	test('correctly transforms keys 2', () => {
		mount(Shortcut, { target: document.body, props: { keys: 'esc enter' } });

		const shortcut = document.body.querySelector('.shortcut');
		expect(shortcut).toBeInTheDocument();
		expect(shortcut).toHaveTextContent('⎋');
		expect(shortcut).toHaveTextContent('⏎');
	});

});
