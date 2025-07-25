import { Component } from 'svelte';
import { MenuProps } from './types';
/**
 * A component that renders a menu.
 * It can be used to display a list of actions or options.
 * It can be opened and closed programmatically.
 * It can also be used to display a list of actions or options.
 *
 * @example
 *
 * ```svelte
 * <Menu bind:this={menu}>
 *   <MenuItem onclick={() => console.log('Action 1')}>Action 1</MenuItem>
 *   <MenuItem onclick={() => console.log('Action 2')}>Action 2</MenuItem>
 *   <MenuSeparator />
 *   <MenuItem onclick={() => console.log('Action 3')}>Action 3</MenuItem>
 * </Menu>
 * ```
 */
declare const Menu: Component<MenuProps, any, any> & {
	/**
	 * Opens the menu at the specified target.
	 * @param target - The target element to open the menu at.
	 */
	open: (target: EventTarget | null) => void;
	/**
	 * Closes the menu.
	 */
	close: () => void;
};
export default Menu;
