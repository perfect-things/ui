simple-ui-components-in-svelte
==============================

## v3.1.0 (2023-01-03)
- UX change: autocomplete will not close on scroll or resize events from now on (it can be changed using new properties `hideOnScroll` and `hideOnResize`).
- fixed: autocomplete issue, where clicking on a filtered list would not select.
- tweak: autocomplete will now show "create new item" always (when enabled), not only when the query did not match anything. Except when the query matches an item exactly.


## v3.0.1 (2022-12-30)
- autocomplete should revert when entered value is not on the list

## v3.0.0 (2022-12-28)
- breaking change: `cssClass` property available on some components has been renamed to `className` (to be more aligned with the standard workaround in other libs/frameworks).
- some components (where possible) are now using `$$props` to pass-through the properties of the instance down to the component.


## v2.1.1 (2022-12-24)
- breaking change: `dist` folder has been renamed to `docs`, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).



## v1.7.12
