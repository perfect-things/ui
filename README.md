PerfectThings/UI
================

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

### Svelte components
Just `import` them from the module, as normal:
```js
import { Button } from '@perfectthings/ui';
```


## Usage with SvelteKit

Available from **v6.4.0.**.

### Config
Because this is a purely front-end framework and requires browser to work, it will not work with SSR so you need to disable it. Create a file: `src/routes/+layout.js` and add this:
```js
export const ssr = false;
```


### 2. Svelte components
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
