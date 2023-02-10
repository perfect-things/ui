import App from './app';

import 'prismjs';
import 'prism-svelte';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

export default new App({ target: document.querySelector('#app') });
