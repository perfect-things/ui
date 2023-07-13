Changelog
=========


## v8.0.0 *(2023-07-?)*
- **Improved:** `info`, `error` and `label` attributes are now supported on other inputs (`Autocomplete`, `Datepicker`, `Select`, `ButtonToggle`, and `Toggle`).

### Breaking changes

#### Autocomplete
- HTML structure changed `.autocomplete input` --> `.autocomplete .input-text-inner .input-text-row input`


#### Select
- HTML structure changed `.select-wrap select` --> `.select .input-text-inner .input-text-row select`


#### Toggle
- HTML structure changed from `.toggle .toggle-inner .toggle-scroller input` --> `.toggle .toggle-inner .toggle-label .toggle-scroller input`


----


## v7.1.2 *(2023-07-05)*
- Fix `Checkbox` label (don't render empty label if no label attribute was passed).


## v7.1.1 *(2023-07-01)*
- Fixed some `NotificationCenter` bugs.


## v7.1.0 *(2023-06-30)*
- Improve `Panel` component with new properties: `collapsible` (it's not collapsible by default), and `disabled`.


## v7.0.2 *(2023-06-29)*
- Add `success` to the `InfoBar` component.
- Behind the scenes refactoring and improvements.


## v7.0.1 *(2023-06-28)*
- `Textarea` component now follows all basic inputs and support `error`, `info`, and `label` properties.
- Notifications are now centered on mobile screen sizes.


## v7.0.0 *(2023-06-28)*
- **New:** [InfoBar](#InfoBar) component.
- **New:** [InputText](#InputText), [InputNumber](#InputNumber), and [Radio](#Radio) components.
- **New:** `info`, `error` and `label` attributes are now supported on all basic inputs (`InputText`, `InputNumber`, `InputMath`, `InputPassword`, `Radio`, and `Checkbox`).
- **Improved:** `InputMath` component: support for `()` characters, to allow for more complex expressions.

### Breaking changes

#### Checkbox
- HTML structure changed `input` --> `.checkbox .checkbox-row input`
- `on:change` is called with a svelte event instead of the native one, so: `e.target.checked` is now `e.detail.checked`

#### InputMath
- HTML structure changed `.input-math-wrapper input` --> `.input-math .input-text-inner .input-math-row input`

#### InputNumber:
- HTML structure changed: `input` --> `.input-number .input-text-inner input`

#### InputPassword
- HTML structure changed: `.input-password-wrapper .input-password-row input` --> `.input-password .input-text-inner .input-password-row input`

#### CSS variables changed:
- `--ui-shadow-invalid` --> `--ui-shadow-danger`

----


## v6.8.1, v6.8.2 *(2023-06-21)*
- Allow HTML in `MessageBox`.
- Improve styling for multi-line messages in `MessageBox`.


## v6.8.0 *(2023-06-17)*
- **New:** `MessageBox` component for displaying quick info/warning/error messages or confirmation dialogs (replacement for browser's native `alert` and `confirm`).


## v6.7.1 *(2023-06-13)*
- Fix `Menu` show and hide events and clearing the highlight on mouse out.


## v6.7.0 *(2023-06-13)*
- **New:** `NotificationCenter` component. This will eventually replace `Toaster`, as it's more accessible and powerful.
- `Toaster` component is now **deprecated** and will be removed in the next major version.
- `PushButton` changes:
  - remove `link` and `text` types, as they don't make sense (pushed state would not be visible).
  - fix `outline` type styling.
  - update the event passed to the `on:change` callback (rename property from `event.detail.value` to `event.detail.pressed`).
  - fix `PushButton` keyboard events (pressing Space or Enter would not trigger the `on:change` event).


## v6.6.8 *(2023-06-07)*
- `Menu` improvements:
  - `aria-expanded` attribute was incorrectly being added to the `body` on menu open (apart from the target button).
  - Tabbing does not move focus out of the menu anymore (it will cycle through the menu items).
  - simplify html structure (`ul` -> `menu`, `li/button` -> `button`)


## v6.6.7 *(2023-06-01)*
- `Toaster` enhancements:
  - Improve contrast (reduce the transparency).
  - Make toasts focusable (so that they can be closed with `Escape`).
  - When toasts are focused or mouse is over them, the auto-close progress will pause.


## v6.6.6 *(2023-05-31)*
- Fix `button-toggle` not working on mobile.


## v6.6.4, v6.6.5 *(2023-05-12)*
- Bring back `--ui-shadow-small` property.
- `Menu` performance improvements: menu will not be rendered until it's opened.


## v6.6.0, v6.6.1, v6.6.2, v6.6.3 *(2023-05-11)*
- `Select` now also accepts an array of strings for items.
- `ButtonToggle` now also accepts an array of strings for items.
- `em` to `rem`, as it's more consistent and predictable.


## v6.5.3, v6.5.4, v6.5.5 *(2023-05-09)*
- Standardise button height to match all the other controls.
- Standardise placeholder and input-icon colours.
- Enhance Autocomplete's and DatePicker's input-icon click experience.
- Size the icons in `em` not `px`.


## v6.5.2 *(2023-05-08)*
- Maintenance update: upgrade dependencies, remove yet another useless a11y warning from svelte zealots.


## v6.5.1 *(2023-05-07)*
- `Menu` highlighting upgrade: `ArrowDown` on the last item will highlight the first item, `ArrowUp` on the first item will highlight the last item.


## v6.5.0 *(2023-04-28)*
- Change the default color for a secondary button.
- Add `info` type to `Button` component (that takes the colour of the previous `default`).
- Fix round button (with text) aspect-ratio lock.


## v6.4.3 *(2023-04-27)*
- Improve `<InputPassword/>` component: don't rerender when eye button is clicked, minor alignment style tweak.
- `Autocomplete` keyboard scrolling alignment fix (highlighted item was partially cropped).


## v6.4.1, v6.4.2 *(2023-04-22)*
- Remove the need to inline svg icons in the consumer's build.
- Add `addIcon` function to allow adding custom icons.
- Fix `menu.open` issue when event was not passed.


## v6.4.0 *(2023-04-20)*
- Tweaks to allow it to be used with SvelteKit.


## v6.3.15, v6.3.16 *(2023-04-15)*
- New icons: `undo` and `redo`.
- Fix `ButtonGroup` styling for other button types.


## v6.3.13, v6.3.14 *(2023-04-12)*
- `Tooltip` style tweaks, so it's finally perfect.
- Minor fix in `Tooltip`.


## v6.3.12 *(2023-04-09)*
- Cleanup.


## v6.3.9, v6.3.10, v6.3.11, v6.3.12 *(2023-04-07)*
- `Menu` on-close should resolve instantly, when the menu is already closed.
- `Menu` new attribute `align` allows to align the menu to the right with the target.


## v6.3.4, v6.3.5, v6.3.6, v6.3.7, v6.3.8 *(2023-04-06)*
- Handle svelte's newest a11y warnings.
- Tweak media query notation.
- Remove menu of type='input'.
- Allow `data-` attributes on `Button` and `MenuItem`.
- Fix Menu target button's `aria-expanded` attribute (wasn't set to `false` on menu close).


## v6.3.3 *(2023-04-05)*
- `Tooltip` tip was upgraded to take advantage of the new `clip-path` property.
- `Tooltip` tip was enhanced with color variations: `success`, `warning` and `danger`.


## v6.3.2 *(2023-03-30)*
- `Table` will not listen to events when it's not the target.
- `Dialog` buttons can now be navigated with left & right arrow keys for convenience.


## v6.3.1 *(2023-03-26)*
- `ButtonGroup` styling tweaks (edge buttons padding alignment)


## v6.3.0 *(2023-03-26)*
- enhance `MenuItem` component (add props: class, disabled, icon, success, warning, danger)


## v6.2.10 *(2023-03-25)*
- Also pass event target in menu `on:close` event.


## v6.2.9 *(2023-03-25)*
- Fix: menu `on:open` event was missing.


## v6.2.8 *(2023-03-24)*
- move tooltip custom class attribute to the tooltip itself, not the content (so that it can easily overwrite the background color).


## v6.2.7 *(2023-03-24)*
- revert some tooltip changes (`events` prop is actually useful)


## v6.2.6 *(2023-03-24)*
- simplify tooltip (change bg color to `accent`, drop `events` prop and default to focus + hover)


## v6.2.5 *(2023-03-24)*
- disable svelte false-positive a11y warnings. See [svelte#8402](https://github.com/sveltejs/svelte/pull/8402)


## v6.2.4 *(2023-03-24)*
- update table docs (missing `data` prop)
- change button's `active` class to `touching` for touch events (to not conflict with popular `active` class name that may be used by consumers)


## v6.2.2, v6.2.3 *(2023-03-24)*
- Fix issue where a selectable table would become non-selectable if another table on the same page was destroyed.


## v6.2.1 *(2023-03-23)*
- Datepicker should stopPropagation on Escape, when the calendar is open.


## v6.2.0 *(2023-03-20)*
- Review accessibility of all components (added `aria-` roles and attributes where necessary).
- Tweaked some components (e.g. close Tooltip on Escape)
- Added unit tests for all components.
- Docs pages style tweaks (e.g. color palette)


## v6.1.1 *(2023-03-15)*
- Remove `coverage` folder from the npm package.


## v6.1.0 *(2023-03-15)*
- `Toggle` component has been completely rewritten to make it more flexible and perfect.


## v6.0.0, v6.0.1, v6.0.2 *(2023-03-13)*
- rebrand `simple-ui-components-in-svelte` to `@perfectthings/ui`


----


## v5.1.0 *(2023-03-12)*
- Better Menu highlighting (doesn't hl first item on open, mouseout removes the highlighting), inline with how native menus work on MacOS
- Mobile friendlier buttons (touchstart invokes :active styling)
- unit tests for some components

## v5.0.8 *(2023-03-03)*
- Tooltip offset parameter


## v5.0.7 *(2023-03-03)*
- PushButton fix (pushed class was not applied)

## v5.0.6 *(2023-03-02)*
- Add back `form` property to a button

## v5.0.5 *(2023-03-02)*
- Reduce memory footprint (removed some of the `transform` props that were no longer necessary)

## v5.0.4 *(2023-03-02)*
- esbuild replaced rollup for speed and simplicity
- cleanup & refactoring

## v5.0.3 *(2023-03-01)*
- Tooltip hiding fix (wasn't hiding when hovering target)

## v5.0.2 *(2023-03-01)*
- Toaster import fix
- Tooltip fix (some console errors were popping up)

## v5.0.1 *(2023-02-28)*
- Bring back `button-outline.css` (it was accidentally deleted in v5.0.0)


## v5.0.0 *(2023-02-28)*
- Breaking change: renamed props for all components: `className` -> `class` (as it turns out it is possible to use `class` as a prop name in svelte)
- Almost all components now have a `class` prop, which can be used to add custom classes to the component
- Updated docs to reflect the above changes
- Docs API table is now alphabetically sorted
- Components don't use `$$props` anymore, as it was causing issues with the `class` prop. Instead, the props are now explicitly passed down to the component. This is a good thing to do, as it makes the components more explicit and easier to understand.


----


## v4.0.0 *(2023-02-28)*
- Breaking change: renamed components: `Item` -> `MenuItem`, `Separator` -> `MenuSeparator`
- Refactored the folder structure


----


## v3.1.2 *(2023-01-04)*
- Toggle's `innerWidth` function was somehow overwriting `window.innerWidth` property (maybe a compiler issue?)


## v3.1.1 *(2023-01-04)*
- Fix `input-number` (could not enter decimals)
- Fix `input-math` (math didn't work)


## v3.1.0 *(2023-01-03)*
- UX change: autocomplete will not close on scroll or resize events from now on (it can be changed using new properties `hideOnScroll` and `hideOnResize`).
- fixed: autocomplete issue, where clicking on a filtered list would not select.
- tweak: autocomplete will now show "create new item" always (when enabled), not only when the query did not match anything. Except when the query matches an item exactly.


## v3.0.1 (2022-12-30)
- autocomplete should revert when entered value is not on the list


## v3.0.0 (2022-12-28)
- breaking change: `cssClass` property available on some components has been renamed to `className` (to be more aligned with the standard workaround in other libs/frameworks).
- some components (where possible) are now using `$$props` to pass-through the properties of the instance down to the component.


----


## v2.1.1 (2022-12-24)
- breaking change: `dist` folder has been renamed to `docs`, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).


----


## v1.7.12
