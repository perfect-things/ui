Changelog
=========

## v9.2.1 *(2023-10-14)*
- `Tag` should not be clickable (or focusable) by default. It can be made interactive by adding the new `clickable` attribute.


## v9.2.0 *(2023-10-13)*
- New component: `Range`.


## v9.1.2, v9.1.1, v9.1.0 *(2023-09-27)*
- New components: `InputRating`, `Tag`, `InputTag`, `InputTime`.
- Add `hideTip` and more, to `Popover`.
- Add `useNativeOnMobile` to `InputDate`.
- Fix `Popover` z-index (so that it shows over dialogs)
- Many other smaller bugfixes and improvements.


## v9.0.5 *(2023-09-22)*
- Reduce `Dialog's` `z-index` so that the popups from the dialog show up on top of it.


## v9.0.4, v9.0.3, v9.0.2, v9.0.1 *(2023-09-16)*
- Make `title` optional for `Panel`.
- Add `ANIMATION_SPEED` to utils/properties.
- Correct `FOCUSABLE_SELECTOR` (it's a constant, not a svelte store).


## v9.0.0 *(2023-09-09)*
- **New**: added `Utils` page in the docs with APIs to the utility functions exposed by the library.
- `Tooltip` was simplified and now the positioning ensures that the tooltip is always visible on the screen.
- `Popover` will now update its position when the window is resized.
- The tip of the `Tooltip` and `Popover` will now try to be centered on the target element (if the box was offset from the screen edge).
- Improved keyboard focus for notifications: when a notification is dismissed from the keyboard (Escape) the focus will be moved to the next available notification.
- Improved & standardised z-index throughout the components.
- Tweaked `Menu` positioning to update on window resize.
- Tweaked `MenuItem` for responsiveness (e.g. add ellipsis if the text is too long).



### Breaking changes
- The `events` property was dropped from the `Tooltip`, leaving *hover* and *focus* events as the default. For use cases when the *click* was needed, `Popover` should be used instead.
- `z-index` value of the `Popover` and `Tooltip` has been reduced from `9999` to `99`, so that it's closer to the content it describes. Ideally tooltips should slide under some other floating elements of the UI (like toolbars or drawers), while remaining above the content layer. This can be o overriden in the app's own css if needed.


----


## v8.4.5, v8.4.4 *(2023-08-26)*
- Standardise `InputSearch` UX: clear button and Escape-to-clear behaviour now works the same in different browsers.
- Enhance `Popover` so that it updates its position after it detects a content change.
- Expose `Popover`'s `updatePosition` function.
- Tweak the dropdown-align function for popover.


## v8.4.3 *(2023-08-25)*
- Fix `InputRadio` group block padding.


## v8.4.2, v8.4.1, v8.4.0 *(2023-08-24)*
- **New:** `Popover` component. If a `Dialog` and `Tooltip` had a child - this would be it. It's a container that can be opened like a dialog, but will be attached to the target element (like a tooltip). It's a great way to display additional information or actions for a specific element on the page. It can contain other components (e.g. buttons) and can serve as a free-form menu.
- Fix popover above the target styling.
- Simplify & refactor `Tooltip` to share more code with `Popover`. Styling and core functionality is now almost the same, while the UX and usage remains a bit different.


## v8.3.3 *(2023-08-19)*
- Inputs with dropdowns (e.g. `Combobox` and `InputDate`) will not trigger page scroll on focus (in mobile Safari).
- `Combobox` dropdown will now auto-adjust its position when the virtual keyboard opens (in mobile Safari).
- `:focus` has been updated to `:focus-visible` for non-input elements, for a better look.


## v8.3.2 *(2023-08-18)*
- Improve `InputRadio` styling to look more like the rest of the inputs (e.g. checkbox).
- Standardise font sizes into css variables: `--ui-font-xs`=14px, `--ui-font-s`=15px, `--ui-font-m`=16px, `--ui-font-l`=17px, `--ui-font-xl`=22px
- Correct the symbol for Return (⏎) in `Menu`.
- `Menu` can now be centered with the target button (using `align` attribute).
- Context `Menu` will now open above the long-pressed spot on mobile (by default).
- Pressing the same letter key, with the `Menu` open will now cycle through the items starting with that letter.
- Pressing space with the `Menu` open, while typing something quickly, will not trigger the click event on the currently selected item. This allows to type-to-highlight elements that contain space in the text. Pressing space standalone (while not typing), will trigger the click event.


## v8.3.1 *(2023-08-14)*
- Removed `--ui-margin-xl` and `--ui-margin-xxl` as they were not used.
- Merged `--ui-border-radius-s` with `--ui-border-radius` and changed to a rem value that calculates to the whole pixel (so that browsers would render it better).
- Fixed the `NotificationCenter` issue, where toasts would not close if navigated away from the page that initialises the component.
- Tweaked dialog border-radius to render a bit better (for dialog's header and footer).
- Aligned components heights (`Menu`, `Combobox`, and `InputRadio` items).
- Fixed `Menu`'s longpress event to not triger when moving the finger (touchmove should stop longpress).
- Improve navigation swipe event (swiping can now be triggered by any element that is not scrollable and has no scrollable ancestors).
- Increased `Menu` font size slightly, while decreasing it for everything (102% -> 100% on `body`).


## v8.3.0 *(2023-08-11)*
- **New:** `InputSearch` component. Not much more than `InputText`, except the search icon and (depending on the browser) - the clear button.
- Fixed a weird and edge-case issue with `Menu` on mobile Safari (#119).


## v8.2.0 *(2023-08-08)*
- `data` attribute in `Combobox` is deprecated. It will be removed in the next major version. Use `items` instead.
- `Combobox` and `Menu` now use the same align function (for consistency and performance) and there's no need to add `elevate` attribute to either of them, as both popups are rendered inside the `body` element and are only added to the DOM, when they are opened (to avoid polluting the DOM with unnecessary elements).


## v8.1.4 *(2023-07-31)*
- Improved `PushButton` pressed styling.
- Some buttons should now react faster on mobile (touch-action added to notification buttons and all inputs, selects and textareas).


## v8.1.3 *(2023-07-30)*
- `PushButton` now has better contrast (when pressed).
- Fixed `showMessage` style for long messages on mobile.
- Fixed password strength popup style.
- Docs: fancy font should be applied do docs only, not to the components.
- Docs: try swipeRight on mobile to open sidebar.
- Added touch-action: manipulation to `Label` and some other missing places.


## v8.1.2 *(2023-07-29)*
- Small table style tweaks
- Docs improvements


## v8.1.1 *(2023-07-28)*
- Bring back `--ui-color-accent-semi` and `--ui-color-highlight-semi` colors.
- `Combobox` and `InputDate` buttons should not be tabbable.
- `Combobox` and `InputDate` buttons should toggle the dropdown on click.


## v8.1.0 *(2023-07-28)*
- **New:** All inputs have a new attribute `labelOnTheLeft` which allows to move the label to the left of the input.


## v8.0.1 *(2023-07-26)*
- **New:** Check the platform on load and add a `mobile` or `desktop` class to the `html` element.
- Fixed: Menu separator is now aligned with menu items.
- Fixed: Notifications Archive "Clear all" button is now back to normal.


## v8.0.0 *(2023-07-25)*
- **New:** `Label` component.
- **New icons:** `sun` and `moon` for the dark-theme switchers.
- **Improvement:** `info`, `error` and `label` attributes are now supported on other inputs (`Combobox`, `InputDate`, `Select`, `ButtonToggle`, and `Toggle`).
- **Improvement:** all components now expose `element` and `inputElement` (if there is one (and only one)). The exceptions are `NotificationCenter` and `MessageBox`, due to their implementation.
- Added `title` attribute to `ButtonToggle`.
- Added `success` type for `MessageBox`.
- Fixed `selectable=false` not working on `Table`.
- Improved styling for `Dialog` and `MessageBox`.

### Breaking changes
- Color palette has been completely revamped for better accessibility (more contrast), consistency and simplicity (fewer colors and css variables).
- `Autocomplete` has been renamed to `Combobox` as this is what it really is.
- `Datepicker` has been renamed to `InputDate`.
- `Toaster` component has been removed. Use `NotificationCenter` instead.
- `Select` - HTML structure has changed: `.select-wrap select` --> `.select .input-inner .input-row select`
- `Table` - CSS classes have changed from `.table-wrapper table.table` --> `.table table`
- `Toggle` - HTML structure has changed from `.toggle .toggle-inner .toggle-scroller input` --> `.toggle .toggle-inner .toggle-label .toggle-scroller input`
- `drawBorders` attribute has been removed from `Dialog`, while header and footer styling has been improved for all dialogs.
- These components previously exposed `_this`, which is now called `element`: `Button`, `Checkbox`, `InputMath`, `PushButton`, `Table`

### Color palette - mapping from v7 to v8 colors:
- `--ui-color-text-dark-1` --> `--ui-color-text-1`
- `--ui-color-text-dark-2` --> `--ui-color-text-2`
- `--ui-color-border-dark-1` --> `--ui-color-border-1`
- `--ui-color-border-dark-2` --> `--ui-color-border-2`
- `--ui-color-background-light-2` --> `--ui-color-background-1`
- `--ui-color-background-dark-2` --> `--ui-color-background-2`
- `--ui-color-highlight-dark-2` --> `--ui-color-highlight-1`

Other (not mentioned above) color variations, (i.e. `-light-` and `-dark-`) have been removed.

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
- HTML structure changed `.input-math-wrapper input` --> `.input-math .input-inner .input-math-row input`

#### InputNumber:
- HTML structure changed: `input` --> `.input-number .input-inner input`

#### InputPassword
- HTML structure changed: `.input-password-wrapper .input-password-row input` --> `.input-password .input-inner .input-password-row input`

#### CSS variables changed:
- `--ui-shadow-invalid` --> `--ui-shadow-danger`

----


## v6.8.2, v6.8.1 *(2023-06-21)*
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


## v6.6.3, v6.6.2, v6.6.1, v6.6.0,  *(2023-05-11)*
- `Select` now also accepts an array of strings for items.
- `ButtonToggle` now also accepts an array of strings for items.
- `em` to `rem`, as it's more consistent and predictable.


## v6.5.5, v6.5.4, v6.5.3 *(2023-05-09)*
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


## v6.4.2, v6.4.1 *(2023-04-22)*
- Remove the need to inline svg icons in the consumer's build.
- Add `addIcon` function to allow adding custom icons.
- Fix `menu.open` issue when event was not passed.


## v6.4.0 *(2023-04-20)*
- Tweaks to allow it to be used with SvelteKit.


## v6.3.16, v6.3.15 *(2023-04-15)*
- New icons: `undo` and `redo`.
- Fix `ButtonGroup` styling for other button types.


## v6.3.14, v6.3.13 *(2023-04-12)*
- `Tooltip` style tweaks, so it's finally perfect.
- Minor fix in `Tooltip`.


## v6.3.12 *(2023-04-09)*
- Cleanup.


## v6.3.12, v6.3.11, v6.3.10, v6.3.9 *(2023-04-07)*
- `Menu` on-close should resolve instantly, when the menu is already closed.
- `Menu` new attribute `align` allows to align the menu to the right with the target.


## v6.3.8, v6.3.7, v6.3.6, v6.3.5, v6.3.4 *(2023-04-06)*
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


## v6.2.3, v6.2.2 *(2023-03-24)*
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


## v6.0.2, v6.0.1, v6.0.0 *(2023-03-13)*
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


## v3.0.1 *(2022-12-30)*
- autocomplete should revert when entered value is not on the list


## v3.0.0 *(2022-12-28)*
- breaking change: `cssClass` property available on some components has been renamed to `className` (to be more aligned with the standard workaround in other libs/frameworks).
- some components (where possible) are now using `$$props` to pass-through the properties of the instance down to the component.


----


## v2.1.1 *(2022-12-24)*
- breaking change: `dist` folder has been renamed to `docs`, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).


----


## v1.7.12 *(2022)*
