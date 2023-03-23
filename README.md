PerfectThings/UI
==============================


A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).

### Github pages site with docs
https://perfect-things.github.io/ui/


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


## Development

You need node & npm (obviously). Run these:
```sh
git clone git@github.com:perfect-things/ui.git perfectthings-ui
cd perfectthings-ui
npm i && npm start
```
A browser window should open with the demo of the components.



## Resources
- icons: https://tablericons.com
- https://developer.apple.com/design/human-interface-guidelines/components/


## Support me
<a href="https://paypal.me/tborychowski" height="60" target="_blank"><img src=".github/paypal-donate-button.png" alt="Donate with PayPal" style="height: 60px !important;"></a> <a href="https://www.buymeacoffee.com/tborychowski" target="_blank" style="margin-left: 1em; margin-right: 1em;"><img height="60" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important;"></a> <a href="https://liberapay.com/tborychowski/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" style="height: 60px;"></a>
</div>
















