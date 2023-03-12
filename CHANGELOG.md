simple-ui-components-in-svelte
==============================

## v5.1.0 (2023-03-12)
- Better Menu highlighting (doesn't hl first item on open, mouseout removes the highlighting), inline with how native menus work on MacOS
- Mobile friendlier buttons (touchstart invokes :active styling)
- unit tests for some components

## v5.0.8 (2023-03-03)
- Tooltip offset parameter


## v5.0.7 (2023-03-03)
- PushButton fix (pushed class was not applied)

## v5.0.6 (2023-03-02)
- Add back `form` property to a button

## v5.0.5 (2023-03-02)
- Reduce memory footprint (removed some of the `transform` props that were no longer necessary)

## v5.0.4 (2023-03-02)
- esbuild replaced rollup for speed and simplicity
- cleanup & refactoring

## v5.0.3 (2023-03-01)
- Tooltip hiding fix (wasn't hiding when hovering target)

## v5.0.2 (2023-03-01)
- Toaster import fix
- Tooltip fix (some console errors were popping up)

## v5.0.1 (2023-02-28)
- Bring back `button-outline.css` (it was accidentally deleted in v5.0.0)


## v5.0.0 (2023-02-28)
- Breaking change: renamed props for all components: `className` -> `class` (as it turns out it is possible to use `class` as a prop name in svelte)
- Almost all components now have a `class` prop, which can be used to add custom classes to the component
- Updated docs to reflect the above changes
- Docs API table is now alphabetically sorted
- Components don't use `$$props` anymore, as it was causing issues with the `class` prop. Instead, the props are now explicitly passed down to the component. This is a good thing to do, as it makes the components more explicit and easier to understand.


## v4.0.0 (2023-02-28)
- Breaking change: renamed components: `Item` -> `MenuItem`, `Separator` -> `MenuSeparator`
- Refactored the folder structure


## v3.1.2 (2023-01-04)
- Toggle's `innerWidth` function was somehow overwriting `window.innerWidth` property (maybe a compiler issue?)


## v3.1.1 (2023-01-04)
- Fix `input-number` (could not enter decimals)
- Fix `input-math` (math didn't work)


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
