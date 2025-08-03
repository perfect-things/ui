import { expect, test, describe, vi } from 'vitest';
import * as utils from '../src/theme-switcher/utils';
import { THEME_STORAGE_KEY } from '../src/theme-switcher';


const localStorageMock = {
	getItem: vi.fn(),
	setItem: vi.fn(),
};
const matchMediaMock = {
	matches: true,
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
};
vi.stubGlobal('localStorage', localStorageMock);
vi.stubGlobal('addEventListener', vi.fn());
vi.stubGlobal('matchMedia', vi.fn(() => matchMediaMock));
vi.stubGlobal('dispatchEvent', vi.fn());



describe('ThemeSwitcher - utils', () => {
	let onPrefsChange, onStorageChange;


	test('ThemeSwitcher - initThemes', () => {
		utils.initThemes();

		expect(localStorageMock.getItem).toHaveBeenCalledWith(THEME_STORAGE_KEY);
		expect(window.addEventListener).toHaveBeenCalledWith('storage', expect.any(Function));
		onStorageChange = (window.addEventListener as any).mock.calls[0][1];

		expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');

		expect(matchMediaMock.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
		onPrefsChange = matchMediaMock.addEventListener.mock.calls[0][1];
	});


	test('ThemeSwitcher - onPrefsChange', () => {
		const spyAdd = vi.spyOn(document.documentElement.classList, 'add').mockImplementation(() => {});
		onPrefsChange({ matches: true } as MediaQueryListEvent);
		expect(spyAdd).toHaveBeenCalledWith('theme-dark');
	});


	test('ThemeSwitcher - getCurrentTheme', () => {
		utils.initThemes();
		const theme = utils.getCurrentTheme();
		expect(theme).toBe('auto');
	});


	test('ThemeSwitcher - setCurrentTheme', () => {
		const spyRm = vi.spyOn(document.documentElement.classList, 'remove').mockImplementation(() => {});
		const spyAdd = vi.spyOn(document.documentElement.classList, 'add').mockImplementation(() => {});

		utils.setCurrentTheme('light');
		expect(localStorageMock.setItem).toHaveBeenCalledWith(THEME_STORAGE_KEY, 'light');
		expect(window.dispatchEvent).toHaveBeenCalled();

		onStorageChange({ key: THEME_STORAGE_KEY, newValue: 'light' } as StorageEvent);

		expect(spyRm).toHaveBeenCalledWith('theme-light', 'theme-dark');
		expect(spyAdd).toHaveBeenCalledWith('theme-light');

		utils.setCurrentTheme('light');
		expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);

		utils.setCurrentTheme(undefined);
		expect(localStorageMock.setItem).toHaveBeenCalledTimes(2);
	});


});
