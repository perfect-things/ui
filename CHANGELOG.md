Changelog
=========


## v10.0.0 *(2025-08-01)*
Thousand thanks to the Svelte's team, for the [long months of hard work](https://github.com/perfect-things/ui/pull/215), that we wasted on rewriting this library, to make it compatible with Svelte v5. Hopefully this is the last time they decided to innovate 😉.


### Notable improvements
- This is the first version of the library that is compatible with Svelte v5.
- All components have been rewritten to use the new Svelte v5 syntax and features.
- All components now use TypeScript for better developer experience.
- Setup, tests & build process have been updated to vite & vitest.
- Event handling has been standardized across all components (more details in the *Breaking Changes* section below).



### Breaking changes
- All Svelte v4 events are now loosing the colon (e.g. e.g. `on:change` -> `onchange`).
- All events have been refactored, and all listeners/handlers have the same signature:
  `function(event: Event, data?: any)`, where the first argument is always `event`,
  and second argument (`data`) is specific to the event & component, e.g.
    - for Inputs `onchange` event, `data` argument will contain the new value (`{ value: any }`)
- Event listeners added to components' events will receive the relevant data as the second argument of the callback. There is no `event.detail` anymore.
- Utils functions & constants have been updated to use the new reactive `$state`:
  - `$ANIMATION_SPEED`   -> `UI.ANIMATION_SPEED` - (number) reactive constant
  - `$PREFERS_DARK`      -> `UI.PREFERS_DARK` - (boolean) reactive constant
  - `FOCUSABLE_SELECTOR` -> `UI.FOCUSABLE_SELECTOR` - (string) constant
  - `isMobile()`         -> `UI.isMobile` - (boolean) constant
- As per Svelte's best practices, attributes bound to variables will not use quotes anymore, so: `value="{value}"` -> `value={value}` or even better: `{value}`.
- Attributes are typed now, and are a bit more restrictive, so e.g. a `boolean` or a `number` attribute will not accept a string value.
- Like in HTML, `boolean` attributes default to `false` if not present, and `true` if passed without a value, so `<Button disabled/>` is enough to disable the button, and is the same as `<Button disabled={true}/>`.


### Other changes
- Added some gradients to the palette.
- Added `ArrowLeft` and `ArrowRight` to `Toggle` component, to allow toggling the value with the keyboard.
- Added `ArrowUp` and `ArrowDown` to `InputNumber` component, to allow incrementing/decrementing the value with the keyboard.
- Fixed `Tooltip`: when mouse entered target from the top - tooltip would show up and hide instantly.
- Handle `ctrlKey` for windows for shortcuts in event handlers
- `Panel` - now uses better css-only animate to auto (#209)
- Upgrade all `class:` attributes to use all the fanciness from Svelte's [class directive](https://svelte.dev/docs/svelte/class#The-class:-directive)
- Fixed `aria-invalid` value: should be `true`/`false` and not a message.
- Test coverage has been improved significantly, with all components now having >80% coverage.
- Tests speed and performance has been improved significantly by eliminating the animations' delays, and by a better handling of the events in tests.
