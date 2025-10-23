## Quick context — what this repo is

This repository is a Svelte component library + docs site. Key pieces:
- Components: `src/` (many subfolders like `button/`, `dialog/`, etc.)
- Docs site: `docs-src/` (Vite root) → built into `docs/` (GitHub Pages)
- Library build: `svelte-package` output to `dist/` (see `npm run build:lib`)

Recommended quick commands (see `package.json` scripts):
- npm start / npm run dev — run the docs/demo site (Vite, root `docs-src/`)
- npm run build:docs — build the docs site into `docs/`
- npm run build:lib — build distributable Svelte package (`@sveltejs/package`)
- npm run build — docs + lib
- npm test / npm run test:watch — run Vitest tests
- npm run test:coverage — run tests with coverage

Testing and environment notes
- Tests use Vitest + jsdom and a global setup file: `tests/_setup.ts`. That file mocks many browser APIs (Element.animate, ResizeObserver, matchMedia, visualViewport, scrollIntoView). When writing tests or fixing flakes, check `_setup.ts` first.
- Vitest config is in `vitest.config.ts`. Tests include `tests/**/*.test.ts` and `tests/**/*.svelte.test.ts`. Setup file path: `./tests/_setup.ts`.
- Coverage thresholds are enforced in `vitest.config.ts` (branches:70, functions:75, lines:80, statements:80).

Component & code patterns to follow
- Components import component-scoped CSS files alongside the Svelte file (e.g. `src/button/Button.svelte` imports `Button.css`, `Button-normal.css`, etc.). Keep CSS files next to the component.
- Components use Svelte 5 runes (examples in `src/button/Button.svelte`: `$props(), $state(), $derived(), $bindable`). When editing components, ensure that the code is valid Svelte 5 (runes, reactive statements, etc.).
- Many components use project-specific helpers. When editing components, preserve the existing usage and search the repo for those helpers before changing a pattern.

Build & docs specifics
- Vite config is `vite.config.ts`: the dev server root is `docs-src/` and `publicDir` points to `../assets`. The docs build injects a version script and Plausible analytics via a transform that looks for `<!-- scripts-go-here -->` in `docs-src/index.html`.
- The distributable package is produced by `svelte-package -i ./src` (script: `build:lib`). The published package contains only `dist/` (see `files` and `exports` in `package.json`).

Linting & type-check
- Linting: `eslint` for JS/TS and `stylelint` for CSS. Scripts:
  - `npm run lint:js` / `npm run lint:js:fix`
  - `npm run lint:css` / `npm run lint:css:fix`
- Type-checking: `svelte-check` (script `type-check`). `tsconfig.json` is present and used by svelte-check.

Release notes & automation
- Release hooks: `scripts/prerelease.sh` and `scripts/release.sh` are used by npm scripts `prerelease` and `release`. Inspect them before changing release flow.

When you edit or add files, keep these in mind
- Docs live in `docs-src/` — small content edits go there. Assets used by the docs are in `assets/` (logo, index.html, base.css, etc.).
- The demo/docs site expects `window.UI_VERSION` to be injected at build time. `vite.config.ts` sets this from `process.env.npm_package_version`.
- Tests rely on the global mocks in `tests/_setup.ts`. If you add a test that needs a browser API, either extend `_setup.ts` or mock locally inside the test.

Searchable anchors/examples to reference in PRs
- Example component: `src/button/Button.svelte`
- Test setup: `tests/_setup.ts`
- Vitest config: `vitest.config.ts`
- Vite/docs config: `vite.config.ts` and `docs-src/index.html`
- Library packaging: `package.json` scripts and `svelte.config.js`
