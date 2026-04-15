# Design: `warning` prop for all input components

**Date:** 2026-04-15

## Context

The `@perfectthings/ui` library exposes an `info` prop on all input components that renders an `<Info>` bar (blue) with a message below the label. There is an existing `Warning.svelte` component in `src/info-bar/` (renders an amber/yellow bar), but it is not yet wired into any input component. Adding a `warning` prop mirrors the `info` pattern and gives consumers a way to show contextual warnings alongside inputs without reaching for custom markup.

## Approach

A single, low-effort approach — mirroring `info` exactly:

1. **Types** — add `warning?: string` to `InputProps` in `src/input/types.ts`, immediately after `info?`
2. **Each input component** — import `Warning` alongside `Info`, destructure `warning` from props, render `<Warning msg={warning} />` immediately after `<Info msg={info} />` in both template branches (default and `labelOnTheLeft`)
3. **Docs API table** — add `inputWarning` constant to `docs/api-table/common-props.ts` and insert it after `inputInfo` in `PROPS.input`
4. **Docs per component** — replace the standalone `Info` example with a combined demo showing both `info` and `warning` props set simultaneously. Keep `labelOnTheLeft` examples consistent.

## No CSS changes needed

`Warning.svelte` renders the same `.info-bar` element as `Info.svelte` — just with the `.info-bar-warning` modifier. All existing layout rules (including `.label-on-the-left .info-bar { margin-bottom: 0 }`) already cover it.

## Components in scope

All 16 input components in `src/input/` that currently use the `info` prop:

| Component | Source | Docs |
|---|---|---|
| ButtonToggle | src/input/button-toggle/ButtonToggle.svelte | docs/components/input/button-toggle/ |
| Checkbox | src/input/checkbox/Checkbox.svelte | docs/components/input/checkbox/ |
| Combobox | src/input/combobox/Combobox.svelte | docs/components/input/combobox/ |
| InputDate | src/input/input-date/InputDate.svelte | docs/components/input/input-date/ |
| InputMath | src/input/input-math/InputMath.svelte | docs/components/input/input-math/ |
| InputNumber | src/input/input-number/InputNumber.svelte | docs/components/input/input-number/ |
| InputPassword | src/input/input-password/InputPassword.svelte | docs/components/input/input-password/ |
| InputRating | src/input/input-rating/InputRating.svelte | docs/components/input/input-rating/ |
| InputSearch | src/input/input-search/InputSearch.svelte | docs/components/input/input-search/ |
| InputText | src/input/input-text/InputText.svelte | docs/components/input/input-text/ |
| InputTime | src/input/input-time/InputTime.svelte | docs/components/input/input-time/ |
| Radio | src/input/radio/Radio.svelte | docs/components/input/radio/ |
| Range | src/input/range/Range.svelte | docs/components/input/range/ |
| Select | src/input/select/Select.svelte | docs/components/input/select/ |
| Textarea | src/input/textarea/Textarea.svelte | docs/components/input/textarea/ |
| Toggle | src/input/toggle/Toggle.svelte | docs/components/input/toggle/ |

## Docs example pattern

Each component doc gets its `Info` example replaced/extended with a combined demo:

```svelte
<h3>Info & Warning</h3>
<ComponentName ... info="Some helpful info" warning="Something to be aware of" />
```

If a component already has a `labelOnTheLeft` + info variant in docs, keep it and add `warning` to that demo too.

## Verification

1. `npm run dev` — visually confirm Warning bar appears below Info bar in the docs for at least InputText and Select
2. `npm test` — all existing tests pass (no new tests needed; this is purely additive UI)
3. `npm run lint` — no type errors (TypeScript will catch missing prop declarations)
4. `npm run build:lib` — library builds cleanly with the new prop exported
