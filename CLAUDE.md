# @perfectthings/ui

Svelte 5 UI component library. Builds both a documentation site and a distributable library.

## Commands

```bash
npm run dev          # Start docs dev server
npm run build        # Build docs site + library dist
npm run build:lib    # Build library only (output: dist/)
npm run build:docs   # Build docs site only

npm test             # Run tests (vitest, jsdom)
npm run test:watch   # Watch mode
npm run test:coverage

npm run lint         # JS + CSS + type-check
npm run lint:fix     # Auto-fix JS + CSS
npm run type-check   # svelte-check
```

## Architecture

```
src/              # Component source (one directory per component)
  input/          # contains form-related components (Input, Textarea, Select, etc.)
  utils/          # Shared utilities (dom, animations, date, ui, etc.)
  index.ts        # Main library export
  root.css        # Global styles
tests/            # Vitest tests (mirrors src structure)
  _setup.ts       # Global test setup — jsdom mocks live here
docs/             # Documentation site source
  components/     # docs & demos for each component (mirrors src structure)
dist/             # Built library output (published to npm)
```

Each component lives in its own directory with `.svelte`, `index.ts`, `types.ts`, and `.css` files.

## Testing

Tests run in jsdom. Key mocks in `tests/_setup.ts`: `Element.animate`, `ResizeObserver`, `window.matchMedia`, `window.visualViewport`.

Set `(UI as any)._ANIMATION_SPEED = 0` in tests to skip animation delays.

## Release

```bash
npm run betarelease  # Interactive: bump beta version, build, push, publish --tag beta
npm run release      # Full release
npm run changelog    # Regenerate docs/pages/changelog.html from CHANGELOG.md
```
