import 'prismjs';
import 'prism-svelte';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/themes/prism-tomorrow.min.css';


import { mount } from 'svelte';
import { App } from './app';

export default mount(App, { target: document.getElementById('app'), });
