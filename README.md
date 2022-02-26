simple-ui-components-in-svelte (or "ui" for short)
==================================================

A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).

## Install & Setup

### Firstly, install the module as a dev dependency:
```sh
npm i -D simple-ui-components-in-svelte
```

### Importing the CSS
You need to import the `dist/index.css` into your bundle.
There are many ways to do that. I specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.

The easiest way is probably to add a `postinstall` script into your `package.json` that will just copy the file into your `dist` folder:
```sh
...
"postinstall": "cp node_modules/simple-ui-components-in-svelte/dist/index.css ./dist/ui.css"
...
```
From there - you can just add it directly to the `index.html`.

### Svelte components
Just `import` them from the module, as normal:
```js
import { Button } from 'simple-ui-components-in-svelte';
```


## TODO
- [ ] rename the repo & make it into an npm module
- [ ] add code samples
- [ ] archive & redirect
  - [ ] https://github.com/tborychowski/svelte-autocomplete
  - [ ] https://github.com/tborychowski/svelte-modal
  - [ ] https://github.com/tborychowski/svelte-text-fit
  - [ ] https://github.com/tborychowski/svelte-toaster
  - [ ] https://github.com/tborychowski/svelte-toggle


- [x] create a proper site
- [x] [replace accordion with details-summary](https://css-tricks.com/exploring-what-the-details-and-summary-elements-can-do/)
- [x] resizable text area
	- https://css-tricks.com/auto-growing-inputs-textareas/
	- https://codepen.io/shshaw/pen/bGNJJBE
- [x] context-menu [tweaks](https://height.app/blog/guide-to-build-context-menus)


## Resources
- icons: https://tablericons.com
