import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import { ThemeSwitcher } from '../src/theme-switcher';
import * as utils from '../src/theme-switcher/utils';



vi.mock('../src/theme-switcher/utils', () => ({
	getCurrentTheme: vi.fn(() => 'auto'),
	initThemes: vi.fn(),
	setCurrentTheme: vi.fn(),
}));


test('ThemeSwitcher', async () => {
	const component = mount(ThemeSwitcher, { target: document.body });

	const el = document.body.querySelector('.theme-switcher');
	expect(el).toBeInTheDocument();
	expect(el).toHaveClass('theme-switcher');

	flushSync();
	expect(utils.initThemes).toHaveBeenCalled();
	expect(utils.getCurrentTheme).toHaveBeenCalled();


	const buttons = el.querySelectorAll('label.button');
	expect(buttons).toHaveLength(3);
	expect(buttons[0]).toHaveAttribute('title', 'Switch theme to Light');
	expect(buttons[2]).toHaveAttribute('title', 'Switch theme to Dark');

	await userEvent.click(buttons[0]);
	expect(utils.setCurrentTheme).toHaveBeenCalledWith('light');

	await unmount(component);
});
