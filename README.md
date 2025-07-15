PerfectThings/UI
================


# TODO
- [ ] handle ctrlKey (not metaKey) for windows for shortcuts in event handlers


- [x] https://github.com/perfect-things/ui/issues/209 animate to auto (Panels)
- [-] explore options to use UI outside of svelte
- [x] correct docs for all components
- [x] upgrade docs code to ts & svelte 5
- [-] enhance datastores to use runes - doesn't work as the `$effect` is not as predictable as `store.subscribe`, and timings of animations overlap and it's terrible.
- [x] enhance utils functions to use runes
- [x] make some rules as to where ...restProps is passed and handled
- [-] split some components into smaller bits (especially inputs)
- [x] standardise event params (so that all events from components have the same structure)
- [x] define a core input props interface for all inputs to extend
  - [x] update all inputs to use that
- [-] make reusable core input component? - not possible
- [x] upgrade all `class:` attrs to `{{}}` and maybe allow the full class={} fanciness in the components? https://svelte.dev/docs/svelte/class#The-class:-directive
- [x] fix json code bits live updating
- [x] correct the event handlers that use `.detail`
- [x] uncomment & fix InputNumber tests
- [x] upgrade all components to `lang="ts"` and `/** @type {Props}` to interfaces
- [x] ensure error, info and label are string types
- [x] remove boolean | string types from all props
- [x] clean all import('svelte').Snippet
- [x] ensure that attributes without values (like `disabled`) are set correctly and working and have a boolean type
- [x] ensure that `aria-invalid` produces the correct attribute & value
- [x] ensure `aria-invalid` is `true`/`false` and not error message
- [x] remove flushSync when not needed
- [x] ensure there's no commented-put `// expect...` in the code. (only 1 left in InputDate)
- [x] fix tests that fail due to animations not running (custom svelte transitions)
- [x] bug: tooltip: when mouse enters target from the top - tooltip shows up and hides instantly
- [x] fix comboboxes
- [x] remove `bubble` code
- [x] remove `createEventDispatcher` code
- [x] ensure value, element, etc. are bindable `value = $bindable('')`






A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).


[![Tests](https://github.com/perfect-things/ui/actions/workflows/node.js.yml/badge.svg)](https://github.com/perfect-things/ui/actions/workflows/node.js.yml)

### Github pages site with docs
https://ui.perfectthings.dev


![Screenshot](screen.png)




## Install & Setup

### Firstly, install the module as a dev dependency:
```sh
npm i -D @perfectthings/ui
```

### Importing the CSS
You need to import the `docs/ui.css` into your bundle.
There are many ways to do that. I specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.

The easiest way is probably to add a `postinstall` script into your `package.json` that will just copy the file into your `dist` folder:
```sh
...
"postinstall": "cp node_modules/@perfectthings/ui/docs/ui.css ./dist/ui.css"
...
```
From there - you can just add it directly to the `index.html`.

### Svelte components
Just `import` them from the module, as normal:
```js
import { Button } from '@perfectthings/ui';
```


## Usage with SvelteKit

Available from **v6.4.0.**.

### 1. Configs
Because this is a purely front-end framework and requires browser to work, it will not work with SSR so you need to disable it. Create a file: `src/routes/+layout.js` and add this:
```js
export const ssr = false;
```


### 2. CSS
If you're using SvelteKit, you need to add the `ui.css` file to the `static` folder, and then either import it into your `global.css` file or add it to the `head` section of your `app.html` file:
```html
<head>
	...
	<link rel="stylesheet" href="%sveltekit.assets%/ui.css" />
</head>
```

### 3. Svelte components
Once that's done, you can import the components as normal.



## Development

You need node & npm (obviously). Run these:
```sh
git clone git@github.com:perfect-things/ui.git perfectthings-ui
cd perfectthings-ui
npm i && npm start
```
A browser window should open with the demo of the components.



## Resources

- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/) from Apple
- Icons from [Tabler Icons](https://tablericons.com)
- *Prime Light* font from [Fontfabric](www.fontfabric.com)


## Support

<a href="https://paypal.me/tborychowski" height="60" target="_blank"><img src=".github/paypal-button.png" alt="Donate with PayPal" style="height: 60px !important;"></a> <a href="https://www.buymeacoffee.com/tborychowski" target="_blank" style="margin-left: 1em; margin-right: 1em;"><img height="60" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important;"></a> <a href="https://liberapay.com/tborychowski/donate" target="_blank"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" style="height: 60px;"></a>
