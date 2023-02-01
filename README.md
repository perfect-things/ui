simple-ui-components-in-svelte
==============================

A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).

### Github pages site with docs
https://perfect-things.github.io/simple-ui-components-in-svelte/


![Screenshot](screen.png)

### TODO
- [ ] Bug: toggle doesn't work on mobile
- [ ] Bug: splitter no work on mobile
- [ ] Feat: context menu on mobile with a long click?

- [ ] improve docs: add description, code samples & API/options/parameters/etc.
	- [x] Autocomplete
	- [x] Button
	- [x] Push Button
	- [x] Button Group
	- [x] Button Toggle
	- [x] Checkbox
	- [x] Datepicker
	- [x] Input
	- [x] Input Math
	- [x] Input Password
	- [x] Select
	- [x] Textarea
	- [x] Toggle

	- [x] Dialog
	- [x] Drawer
	- [x] Menu
	- [x] Panel
	- [x] Splitter
	- [ ] Table
	- [ ] Tree
	- [ ] Icon
	- [ ] TextFit
	- [ ] Toaster
	- [ ] Tooltip

    - [ ] Mobile compatible
    - [ ] Update screen.png

- [ ] color palette
  - reduce text & bg colors
  - text-primary, secondary
  - rm semi, etc



## Install & Setup

### Firstly, install the module as a dev dependency:
```sh
npm i -D simple-ui-components-in-svelte
```

### Importing the CSS
You need to import the `docs/ui.css` into your bundle.
There are many ways to do that. I specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.

The easiest way is probably to add a `postinstall` script into your `package.json` that will just copy the file into your `dist` folder:
```sh
...
"postinstall": "cp node_modules/simple-ui-components-in-svelte/docs/ui.css ./dist/ui.css"
...
```
From there - you can just add it directly to the `index.html`.

### Svelte components
Just `import` them from the module, as normal:
```js
import { Button } from 'simple-ui-components-in-svelte';
```


## Development

You need node & npm (obviously). Run these:
```sh
git clone git@github.com:perfect-things/simple-ui-components-in-svelte.git
cd simple-ui-components-in-svelte
npm i && npm start
```
A browser window should open with the demo of the components.



## Resources
- icons: https://tablericons.com
- https://developer.apple.com/design/human-interface-guidelines/components/
