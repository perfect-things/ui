import { Component } from 'svelte';
import { MenuItemProps } from './types';

/**
 * Component for displaying an item in a Menu.
 *
 * @param shortcut - Keyboard shortcut text to display
 * @param icon - Icon to display with the menu item
 * @param disabled - Whether the menu item is disabled
 * @param success - Whether to apply success styling
 * @param warning - Whether to apply warning styling
 * @param danger - Whether to apply danger styling
 * @param {string} [data-x] - Data attributes
 * @param onclick - Click event handler that receives MouseEvent and data
 * @remarks
 * - This component is used within a Menu to represent individual items.
 * - It can display an icon, a keyboard shortcut, and can be styled based on its state.
 * - The `onclick` handler can return `false` to prevent the menu from closing.
 * - If `onclick` returns `false`, the menu will not close after clicking the item.
 *
 * @example
 * <MenuItem icon="edit" shortcut="Ctrl+E" onclick={handleEdit}>
 *   Edit Item
 * </MenuItem>
 * @see {@link https://ui.perfectthings.dev/#Menu} for the Menu component that uses MenuItem.
 */
declare const MenuItem: Component<MenuItemProps>;
export default MenuItem;
